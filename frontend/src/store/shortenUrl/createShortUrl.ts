import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import urlFormStore from "./urlFormStore";
import generateRandomString from "@/lib/generateRandomString";
import useShortenResult from "./shortenUrlResult";

const useCreateShortUrl = () => {

    const { setData, setError, toggleLoading, togglePending, reset } = useShortenResult()
    const { urlForm } = urlFormStore()

    return useMutation({
        mutationKey: ['shortenUrl'],
        mutationFn: async () => {
            reset()
            toggleLoading(true)
            const res = await api.url.$post({
                json: {
                    originalUrl: urlForm.originalUrl,
                    shortUrl: urlForm.customUrl || generateRandomString()
                }
            })
            if (!res.ok) {
                setError(true)
                return await res.json()
            }
            setError(false)
            return await res.json()
        },
        onSuccess: (data) => {
            setData({ ...data })
            toggleLoading(false)
            togglePending(false)
        }
    })
}

export default useCreateShortUrl