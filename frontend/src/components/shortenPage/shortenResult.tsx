import useShortenResult from "@/store/shortenUrl/shortenUrlResult";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";

const ShortenResult = () => {

    const { data, isLoading } = useShortenResult()

    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        const url = `https://short.me/${data?.shortUrl}`;
        navigator.clipboard.writeText(url)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000)
            })
            .catch((error) => {
                console.error('Gagal menyalin URL:', error);
            });
    };

    if (!data) return <></>
    if (!data.originalUrl) return <>Error, pastikan url valid dan ganti custom url jika masih error</>
    if (isLoading) return <>Loading.....</>
    return (
        <>
            <Card className="w-10/12 self-center overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-left text-2xl">Your Shortened URL</CardTitle>
                    <CardDescription className="text-left">Now you can use the url</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col justify-center items-center gap-4">
                    <section className="min-w-full flex flex-col justify-center items-center gap-2">
                        <code className="bg-accent-foreground rounded text-accent font-mono truncate py-1 px-1 w-full">
                            https://short.me/{data.shortUrl}
                        </code>
                        <Button className="cursor-pointer" onClick={() => handleCopy()}>
                            {isCopied ? "Coppied" : "Copy Url"}
                        </Button>
                    </section>
                    <section className="flex flex-col items-start w-full gap-1 truncate">
                        <p>Original Url : </p>
                        <a href={data.originalUrl} className="hover:font-bold truncate w-full">{data.originalUrl}</a>
                    </section>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-muted-foreground text-sm">*Short URLs is active forever until the server down</p>
                </CardFooter>
            </Card>
        </>
    )
}

export default ShortenResult