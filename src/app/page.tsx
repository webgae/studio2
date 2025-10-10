import { Suspense } from 'react';
import { getAllPosts, searchPosts, getPostsByLabel, createExcerpt, extractImageUrl } from '@/lib/blogger';
import PostCard from '@/components/PostCard';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { type Post } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function PostsList({ searchParams }: HomePageProps) {
  const query = searchParams?.q as string;
  const label = searchParams?.label as string;
  const pageToken = searchParams?.pageToken as string;
  const prevPageTokens = (searchParams?.prevPageTokens as string)?.split(',') || [];

  let postsData;
  let allLabels = new Set<string>();

  try {
    if (query) {
      postsData = await searchPosts(query, pageToken);
      const allPosts = await getAllPosts(100);
      allPosts.items.forEach(post => post.labels?.forEach(l => allLabels.add(l)));
    } else if (label) {
      postsData = await getPostsByLabel(label, pageToken);
      const allPosts = await getAllPosts(100); // Fetch more to get all labels
      allPosts.items.forEach(post => post.labels?.forEach(l => allLabels.add(l)));
    } else {
      postsData = await getAllPosts(10, pageToken);
      postsData.items.forEach(post => post.labels?.forEach(l => allLabels.add(l)));
    }

    if (!postsData || !postsData.items || postsData.items.length === 0) {
      return <p className="text-center text-muted-foreground mt-8">No posts found.</p>;
    }
  } catch (error) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error Fetching Posts</AlertTitle>
        <AlertDescription>
          Could not connect to the Blogger API. Please ensure your `NEXT_PUBLIC_BLOG_ID` and `NEXT_PUBLIC_BLOGGER_API_KEY` are correct in `.env.local`.
        </AlertDescription>
      </Alert>
    );
  }

  const { items: posts, nextPageToken } = postsData;

  const newPrevPageTokens = pageToken ? [...prevPageTokens, pageToken] : [];
  const prevPageToken = newPrevPageTokens.length > 1 ? newPrevPageTokens[newPrevPageTokens.length - 2] : undefined;

  const buildPageLink = (token: string | undefined, direction: 'next' | 'prev') => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (label) params.set('label', label);
    if (token) params.set('pageToken', token);

    if (direction === 'next' && pageToken) {
      params.set('prevPageTokens', [...prevPageTokens, pageToken].join(','));
    }
    if (direction === 'prev' && prevPageTokens.length > 1) {
       params.set('prevPageTokens', prevPageTokens.slice(0, prevPageTokens.length -1).join(','));
    }
    
    const queryString = params.toString();
    return `/?${queryString}`;
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-9">
        <div className="space-y-8">
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
            <Button asChild variant="outline" disabled={!pageToken}>
              <Link href={buildPageLink(prevPageToken, 'prev')}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Anterior
              </Link>
            </Button>
            <Button asChild variant="outline" disabled={!nextPageToken}>
              <Link href={buildPageLink(nextPageToken, 'next')}>
                Siguiente
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
      </div>
      {allLabels.size > 0 && (
        <aside className="md:col-span-3">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold font-headline mb-4">Labels</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(allLabels).map(l => (
                <Link href={`/?label=${encodeURIComponent(l)}`} key={l}>
                  <Badge
                    variant={label === l ? 'default' : 'secondary'}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {l}
                  </Badge>
                </Link>
              ))}
              {label && (
                <Link href="/">
                  <Badge variant="outline" className="cursor-pointer">
                    Clear filter
                  </Badge>
                </Link>
              )}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default function HomePage({ searchParams }: HomePageProps) {
  const query = searchParams?.q as string;
  const label = searchParams?.label as string;
  let title = "Latest Posts";
  if (query) {
    title = `Search results for "${query}"`;
  } else if (label) {
    title = `Posts tagged with "${label}"`;
  }

  return (
    <section>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">{title}</h1>
      <Suspense fallback={<Loading />}>
        <PostsList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-9 space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-6 bg-card p-6 rounded-lg border">
            <Skeleton className="w-full sm:w-1/3 h-48 rounded-lg" />
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
      <aside className="md:col-span-3">
        <div className="sticky top-24">
          <Skeleton className="h-8 w-24 mb-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </aside>
    </div>
  );
}
