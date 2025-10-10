import { type Post, type PostsList } from './types';

const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;
const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`;

async function fetchBloggerApi<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!API_KEY || !BLOG_ID || API_KEY === 'TU_API_KEY_DE_BLOGGER' || BLOG_ID === 'TU_BLOG_ID') {
    throw new Error('Blogger API Key or Blog ID is not configured. Please check your .env.local file.');
  }

  const url = `${API_URL}${path}${path.includes('?') ? '&' : '?'}key=${API_KEY}`;
  
  try {
    const res = await fetch(url, {
      ...options,
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });
    
    if (!res.ok) {
       const errorText = await res.text();
      console.error('Blogger API Error:', errorText);
      throw new Error(`Failed to fetch from Blogger API: ${res.statusText}. Response: ${errorText}`);
    }

    return res.json() as Promise<T>;
  } catch (error) {
    console.error('Error in fetchBloggerApi:', error);
    if (error instanceof Error) {
      throw new Error(`Could not connect to the Blogger API. ${error.message}`);
    }
    throw new Error('Could not connect to the Blogger API.');
  }
}

export async function getAllPosts(maxResults: number = 10, pageToken?: string): Promise<PostsList> {
  let path = `/posts?fetchImages=true&maxResults=${maxResults}`;
  if (pageToken) {
    path += `&pageToken=${pageToken}`;
  }
  return fetchBloggerApi<PostsList>(path);
}

export async function getPostById(postId: string): Promise<Post> {
  return fetchBloggerApi<Post>(`/posts/${postId}?fetchImages=true`);
}

export async function searchPosts(query: string, pageToken?: string): Promise<PostsList> {
  let path = `/posts/search?q=${encodeURIComponent(query)}&fetchImages=true`;
  if (pageToken) {
    path += `&pageToken=${pageToken}`;
  }
  return fetchBloggerApi<PostsList>(path);
}

export async function getPostsByLabel(label: string, pageToken?: string): Promise<PostsList> {
  let path = `/posts?labels=${encodeURIComponent(label)}&fetchImages=true`;
  if (pageToken) {
    path += `&pageToken=${pageToken}`;
  }
  return fetchBloggerApi<PostsList>(path);
}

export function extractImageUrl(post: Post): string | null {
  if (post.images && post.images.length > 0) {
    return post.images[0].url;
  }
  const match = post.content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

export function createExcerpt(htmlContent: string, maxLength: number = 150): string {
  if (!htmlContent) return '';
  const text = htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) {
    return text;
  }
  const truncated = text.substr(0, maxLength);
  return truncated.substr(0, truncated.lastIndexOf(' ')) + '...';
}
