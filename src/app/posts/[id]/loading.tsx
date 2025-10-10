import { Skeleton } from "@/components/ui/skeleton";

export default function PostLoading() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
      <div className="flex justify-center gap-6 mb-8">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-40" />
      </div>
      <Skeleton className="w-full aspect-video mb-8 rounded-lg" />
      <div className="space-y-4 prose prose-lg max-w-none">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <br />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
    </div>
  );
}
