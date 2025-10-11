
import { Suspense } from 'react';
import { getAllPosts, searchPosts, getPostsByLabel, createExcerpt, extractImageUrl } from '@/lib/blogger';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { type Post } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import SearchBar from '@/components/SearchBar';
import { Badge } from '@/components/ui/badge';

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
       // Fetch labels even if there are no posts for the current view
      const allPostsForLabels = await getAllPosts(100);
      if (allPostsForLabels.items) {
        allPostsForLabels.items.forEach(post => {
          post.labels?.forEach(l => allLabels.add(l));
        });
      }
    } else {
       postsData.items.forEach(post => {
        post.labels?.forEach(l => allLabels.add(l));
      });
    }

  } catch (error) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error al obtener las publicaciones</AlertTitle>
        <AlertDescription>
          No se pudo conectar a la API de Blogger. Asegúrate de que `BLOG_ID` y `BLOGGER_API_KEY` estén configurados correctamente en las variables de entorno de tu proveedor de hosting.
        </AlertDescription>
      </Alert>
    );
  }

  const { items: posts, nextPageToken } = postsData || { items: [] };

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
        {allLabels.size > 0 && (
          <div className="mb-12 p-6 bg-card border rounded-lg">
              <h3 className="text-lg font-semibold font-headline mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5"/>
                  Filtrar por etiqueta
              </h3>
              <div className="flex flex-wrap gap-2">
                  <Link href="/blog">
                      <Badge variant={!label ? 'default' : 'secondary'} className="cursor-pointer text-sm">Todas</Badge>
                  </Link>
                  {Array.from(allLabels).sort().map(l => (
                      <Link href={`/blog?label=${encodeURIComponent(l)}`} key={l}>
                          <Badge variant={label === l ? 'default' : 'secondary'} className="cursor-pointer text-sm">{l}</Badge>
                      </Link>
                  ))}
              </div>
          </div>
      )}

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground mt-8">No se encontraron publicaciones.</p>
      ) : (
        <>
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
        </>
      )}
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
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-headline mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora artículos, guías y consejos sobre desarrollo y optimización en WordPress.
            </p>
        </div>
      <div className="w-full max-w-xl mx-auto mb-8">
        <SearchBar />
      </div>
      <Suspense fallback={<Loading />}>
        <PostsList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

function Loading() {
  return (
    <div>
        <div className="mb-12 p-6 bg-card border rounded-lg">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-28" />
            </div>
        </div>
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
    </div>
  );
}
