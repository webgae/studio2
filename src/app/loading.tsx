import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      <Skeleton className="h-12 w-1/2 mx-auto mb-8" />
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
    </div>
  )
}
