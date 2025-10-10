import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Skeleton className="h-12 w-1/2 mb-4" />
      <Skeleton className="h-8 w-3/4 mb-8" />
      <div className="w-full max-w-4xl">
        <Skeleton className="w-full h-96" />
      </div>
    </div>
  );
}
