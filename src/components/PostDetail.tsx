import { type Post } from '@/lib/types';
import { format } from 'date-fns';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { extractImageUrl } from '@/lib/blogger';

export default function PostDetail({ post }: { post: Post }) {
  const imageUrl = extractImageUrl(post);
  const effectiveImageUrl = imageUrl?.startsWith('//') ? `https:${imageUrl}`: imageUrl;

  return (
    <article className="max-w-4xl mx-auto bg-card p-4 sm:p-8 rounded-lg shadow-lg border">
      <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-center">{post.title}</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground mb-8 text-sm">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{post.author.displayName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.published}>{format(new Date(post.published), 'MMMM d, yyyy')}</time>
        </div>
      </div>
      
      {effectiveImageUrl && (
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={effectiveImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
          />
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {post.labels && post.labels.length > 0 && (
        <div className="mt-12 border-t pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold">Labels</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.labels.map(label => (
              <Link href={`/blog?label=${encodeURIComponent(label)}`} key={label}>
                <Badge variant="secondary" className="hover:bg-accent">{label}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href={post.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
          View original on Blogger
        </Link>
      </div>
    </article>
  );
}
