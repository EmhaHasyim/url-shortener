import { Skeleton } from "@/components/ui/skeleton"


const ShortenResultLoading = () => {
    return (
        <Skeleton className="w-10/12 self-center overflow-hidden min-h-80 p-4 gap-1 flex justify-start flex-col">
            <Skeleton className="w-3/5 bg-primary-foreground h-8" />
            <Skeleton className="w-1/3 bg-primary-foreground h-5" />
            <Skeleton className="w-full mt-4 bg-primary-foreground h-9" />
            <Skeleton className="w-1/6 mt-1 bg-primary-foreground self-center h-9" />
            <Skeleton className="w-1/4 mt-1 bg-primary-foreground  h-6" />
            <Skeleton className="w-3/5 mt-1 bg-primary-foreground  h-5" />
            <Skeleton className="w-4/6 mt-8 bg-primary-foreground  h-5" />
        </Skeleton>
    )
}

export default ShortenResultLoading