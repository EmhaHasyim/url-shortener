import { useQuery } from "@tanstack/react-query";

interface ShortenUrlResult {
    originalUrl: string;
    shortUrl: string;
}

const useShortenResult = () => {
    return useQuery<ShortenUrlResult | null >({
        queryKey: ['shortenResult'],
        queryFn: () => null,
    });
};

export default useShortenResult;