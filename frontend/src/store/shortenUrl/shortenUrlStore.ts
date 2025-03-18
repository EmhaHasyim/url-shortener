import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import urlFormStore from "./urlFormStore";
import generateRandomString from "@/lib/generateRandomString";

const useShortenUrl = () => {

    const { urlForm } = urlFormStore()

    const customUrl = urlForm.customUrl.length <= 0 ? generateRandomString() : urlForm.customUrl

    return useQuery({
        queryKey: ['shortenUrl', urlForm.originalUrl, customUrl],
        queryFn: async () => {
            const res = await api.url.$post({
                json: {
                    originalUrl: urlForm.customUrl,
                    shortUrl: customUrl
                }
            })
            return res.json()
        }
    })
}

export default useShortenUrl