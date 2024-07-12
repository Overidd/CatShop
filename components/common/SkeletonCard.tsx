import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
   return (
      <div className="flex flex-col gap-1 overflow-hidden space-y-4">
         <Skeleton className="h-[140px] w-full rounded-xl bg-bgCategory" />
         <div className="space-y-2 ">
            <Skeleton className="h-4 w-full bg-bgCategory" />
            <Skeleton className="h-4 w-full bg-bgCategory" />
            <Skeleton className="h-4 w-full bg-bgCategory" />
         </div>

      </div>
   )
}

export function SkeletonCart() {
   return (
      <div className="rounded-xl bg-bgCategory overflow-hidden">
         <Skeleton className="h-[140px] w-full bg-bgCategory" />
      </div>
   )
}
