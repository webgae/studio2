import { Suspense } from 'react';
import { getAllPosts, searchPosts, getPostsByLabel, createExcerpt, extractImageUrl } from '@/lib/blogger';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { type Post } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import SearchBar from '@/components/SearchBar';

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function PostsList({ searchParams }: BlogPageProps) {
  const query = searchParams?.q as string;
  const label = searchParams?.label as string;
  const pageToken = searchParams?.pageToken as string;

  // Blogger API no proporciona un token "anterior", por lo que debemos gestionarlo manualmente.
  // El token de la página actual se convierte en el "prevPageToken" para el enlace "Siguiente".
  const prevPageToken = searchParams?.prevPageToken as string;

  let postsData;
  let allLabels = new Set<string>();

  try {
    if (query) {
      postsData = await searchPosts(query, pageToken);
    } else if (label) {
      postsData = await getPostsByLabel(label, pageToken);
    } else {
      postsData = await getAllPosts(10, pageToken);
    }

    if (!postsData || !postsData.items || postsData.items.length === 0) {
      return <p className="text-center text-muted-foreground mt-8">No se encontraron publicaciones.</p>;
    }
  } catch (error) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error al obtener las publicaciones</AlertTitle>
        <AlertDescription>
          No se pudo conectar a la API de Blogger. Asegúrate de que `NEXT_PUBLIC_BLOG_ID` y `NEXT_PUBLIC_BLOGGER_API_KEY` sean correctos en `.env.local`.
        </AlertDescription>
      </Alert>
    );
  }

  const { items: posts, nextPageToken } = postsData;

  const buildPageLink = (token: string | undefined, newPrevToken?: string) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (label) params.set('label', label);
    if (token) params.set('pageToken', token);
    if (newPrevToken) params.set('prevPageToken', newPrevToken);
    
    const queryString = params.toString();
    return `/blog?${queryString}`;
  };

  const prevLink = buildPageLink(prevPageToken);
  const nextLink = buildPageLink(nextPageToken, pageToken);


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={createExcerpt(post.content)}
            date={post.published}
            imageUrl={extractImageUrl(post)}
            labels={post.labels}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
          <Button asChild variant="outline" disabled={!prevPageToken}>
            <Link href={prevLink}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Link>
          </Button>
          <Button asChild variant="outline" disabled={!nextPageToken}>
            <Link href={nextLink}>
              Siguiente
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
    </div>
  );
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const query = searchParams?.q as string;
  const label = searchParams?.label as string;
  let title = "Últimas Publicaciones";
  if (query) {
    title = `Resultados de búsqueda para "${query}"`;
  } else if (label) {
    title = `Publicaciones con la etiqueta "${label}"`;
  }

  return (
    <section>
      <div className="w-full max-w-xl mx-auto mb-8">
        <SearchBar />
      </div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">{title}</h1>
      <Suspense fallback={<Loading />}>
        <PostsList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col gap-6 bg-card p-6 rounded-lg border">
          <Skeleton className="w-full h-48 rounded-lg" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-20 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
