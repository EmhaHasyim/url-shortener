import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import urlFormStore from "./urlFormStore";
import generateRandomString from "@/lib/generateRandomString";

const useShortenUrl = () => {

    const queryClient = useQueryClient()
    const { urlForm } = urlFormStore()

    return useMutation({
        mutationKey: ['shortenUrl'],
        mutationFn: async () => {
            const res = await api.url.$post({
                json: {
                    originalUrl: urlForm.originalUrl,
                    shortUrl: urlForm.customUrl || generateRandomString()
                }
            })
            const data = await res.json()
            return data
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['shortenResult'], data)
        }
    })
}

export default useShortenUrl