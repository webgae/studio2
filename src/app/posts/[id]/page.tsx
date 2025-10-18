import { getPostById, getAllPosts, extractImageUrl, createExcerpt } from '@/lib/blogger';
import { notFound } from 'next/navigation';
import PostDetail, { TableOfContents } from '@/components/PostDetail';
import type { Metadata, ResolvingMetadata } from 'next';
import { getIdFromSlug, createPostSlug, truncateText } from '@/lib/utils';
import RelatedPosts from '@/components/RelatedPosts';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { type BlogPosting, type WithContext } from 'schema-dts';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Sidebar } from '@/components/Sidebar';


type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const postId = getIdFromSlug(params.id);
    const post = await getPostById(postId);
    const previousImages = (await parent).openGraph?.images || [];
    const imageUrl = extractImageUrl(post);
    const postSlug = createPostSlug(post.title, post.id);

    return {
      title: post.title,
      description: createExcerpt(post.content, 160),
      alternates: {
        canonical: `/posts/${postSlug}`,
      },
      openGraph: {
        title: post.title,
        description: createExcerpt(post.content, 160),
        images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
        type: 'article',
        publishedTime: post.published,
        authors: [post.author.displayName],
      },
    };
  } catch (error) {
    return {
      title: 'Post not found',
    };
  }
}

export async function generateStaticParams() {
  try {
    // Prerender the most recent posts at build time for faster initial loads
    const { items } = await getAllPosts(20); 
    if (!items) return [];
    return items.map((post) => ({
      id: createPostSlug(post.title, post.id),
    }));
  } catch (error) {
    console.error("Could not generate static params for posts:", error);
    return [];
  }
}

function RelatedPostsLoading() {
  return (
    <div className="mt-16">
      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
           <div key={i} className="flex flex-col gap-4 bg-card p-4 rounded-lg border">
            <Skeleton className="w-full h-32 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function PostPage({ params }: Props) {
  try {
    const postId = getIdFromSlug(params.id);
    const post = await getPostById(postId);
    
    const jsonLd: WithContext<BlogPosting> = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "name": post.title,
      "description": createExcerpt(post.content, 200),
      "image": extractImageUrl(post) || undefined,
      "datePublished": post.published,
      "dateModified": post.updated,
      "author": {
        "@type": "Person",
        "name": post.author.displayName,
        "url": post.author.url
      },
      "publisher": {
        "@type": "Organization",
        "name": "WEBGAE",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.webgae.com/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.webgae.com/posts/${createPostSlug(post.title, post.id)}`
      }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <div className="grid lg:grid-cols-[auto,1fr] lg:gap-12">
                <Sidebar>
                    <TableOfContents postContent={post.content} />
                </Sidebar>
                
                <main className="flex-1 min-w-0 py-8">
                    <div className="flex items-center justify-end gap-4 mb-8 lg:hidden">
                         <Breadcrumbs
                            items={[
                            { label: 'Blog', href: '/blog' },
                            { label: truncateText(post.title, 20), href: `/posts/${params.id}` },
                            ]}
                        />
                    </div>
                     <Breadcrumbs
                        items={[
                        { label: 'Inicio', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: truncateText(post.title, 50), href: `/posts/${params.id}` },
                        ]}
                        className="mb-8 hidden lg:flex"
                    />
                    <PostDetail post={post} />
                    <div className="max-w-4xl mx-auto">
                        <Suspense fallback={<RelatedPostsLoading />}>
                            <RelatedPosts currentPostId={post.id} labels={post.labels} />
                        </Suspense>
                    </div>
                </main>
            </div>
        </div>
    );
  } catch (error) {
    console.error(`Error fetching post ${params.id}:`, error);
    notFound();
  }
}
