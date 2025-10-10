import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Badge } from './ui/badge';
import { Calendar } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string | null;
  labels?: string[];
}

const placeholder = PlaceHolderImages.find(p => p.id === 'blog-post-placeholder');

export default function PostCard({ id, title, excerpt, date, imageUrl, labels }: PostCardProps) {
  const effectiveImageUrl = imageUrl?.startsWith('//') ? `https:${imageUrl}`: imageUrl;
  
  return (
    <Link href={`/posts/${id}`} className="block group">
      <article className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
                <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                        src={effectiveImageUrl || placeholder?.imageUrl || ''}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        data-ai-hint={!effectiveImageUrl ? placeholder?.imageHint : undefined}
                    />
                </div>
            </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-2 group-hover:text-primary transition-colors">
                {title}
            </h2>
            <div className="text-sm text-muted-foreground mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>{format(new Date(date), 'MMMM d, yyyy')}</time>
              </div>
            </div>
            <p className="mb-4 leading-relaxed">{excerpt}</p>
            {labels && labels.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {labels.map(label => (
                    <Badge variant="secondary" key={label}>{label}</Badge>
                ))}
              </div>
            )}
            <span className="text-primary font-semibold">
              Read More &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
