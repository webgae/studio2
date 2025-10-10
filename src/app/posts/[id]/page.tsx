import { getPostById, getAllPosts, extractImageUrl, createExcerpt } from '@/lib/blogger';
import { notFound } from 'next/navigation';
import PostDetail from '@/components/PostDetail';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const post = await getPostById(params.id);
    const previousImages = (await parent).openGraph?.images || [];
    const imageUrl = extractImageUrl(post);

    return {
      title: post.title,
      description: createExcerpt(post.content, 160),
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
      id: post.id,
    }));
  } catch (error) {
    console.error("Could not generate static params for posts:", error);
    return [];
  }
}

export default async function PostPage({ params }: Props) {
  try {
    const post = await getPostById(params.id);
    return <PostDetail post={post} />;
  } catch (error) {
    console.error(`Error fetching post ${params.id}:`, error);
    notFound();
  }
}
