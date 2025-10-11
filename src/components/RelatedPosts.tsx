import { getPostsByLabel, getAllPosts, createExcerpt, extractImageUrl } from "@/lib/blogger";
import PostCard from "./PostCard";
import { type Post } from "@/lib/types";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";


interface RelatedPostsProps {
    currentPostId: string;
    labels: string[] | undefined;
}

export default async function RelatedPosts({ currentPostId, labels }: RelatedPostsProps) {

    let relatedPosts: Post[] = [];

    try {
        if (labels && labels.length > 0) {
            const firstLabel = labels[0];
            const { items } = await getPostsByLabel(firstLabel, undefined);
            if (items) {
                 relatedPosts = items.filter(post => post.id !== currentPostId).slice(0, 3);
            }
        }
    
        if (relatedPosts.length < 3) {
            const { items: recentPosts } = await getAllPosts(4);
            if (recentPosts) {
                const recentFiltered = recentPosts.filter(post => post.id !== currentPostId);
                // Add recent posts to relatedPosts until we have 3, avoiding duplicates
                 for (const post of recentFiltered) {
                    if (relatedPosts.length >= 3) break;
                    if (!relatedPosts.some(p => p.id === post.id)) {
                        relatedPosts.push(post);
                    }
                }
            }
        }
    } catch (error) {
        return (
             <div className="mt-16">
                 <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error al cargar artículos relacionados</AlertTitle>
                    <AlertDescription>
                    No se pudieron obtener las publicaciones relacionadas desde la API de Blogger.
                    </AlertDescription>
                </Alert>
            </div>
        )
    }


    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold font-headline mb-8">También te puede interesar...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(post => (
                    <PostCard 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        excerpt={createExcerpt(post.content, 100)}
                        date={post.published}
                        imageUrl={extractImageUrl(post)}
                        labels={post.labels}
                    />
                ))}
            </div>
        </div>
    )

}