import { create } from 'zustand'

interface ShortenData {
    id: string;
    originalUrl: string;
    shortUrl: string;
    createdAt: string;
}

type ShortenResult = {
    data: ShortenData;
    isError: boolean;
    isLoading: boolean;
    isPending: boolean;

    setData: (data: ShortenData) => void;
    setError: (error: boolean) => void;
    toggleLoading: (isLoading: boolean) => void;
    togglePending: (isPending: boolean) => void;
    reset: () => void;
};

const useShortenUrlResult = create<ShortenResult>((set) => ({
    data: { id: '', originalUrl: '', shortUrl: '', createdAt: '' },
    isError: false,
    isLoading: false,
    isPending: true,

    setData: (data) => set({ data: { ...data } }),
    setError: (error) => set({ isError: error }),
    toggleLoading: (isLoading) => set({ isLoading }),
    togglePending: (isPending) => set({ isPending }),
    reset: () => set({ data: { id: '', originalUrl: '', shortUrl: '', createdAt: '' }, isLoading: false })
}))

export default useShortenUrlResult