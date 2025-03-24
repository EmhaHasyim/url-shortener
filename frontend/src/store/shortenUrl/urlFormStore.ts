import {create} from "zustand";

interface UrlFormStore {
    urlForm: {originalUrl: string, customUrl: string},
    setUrlForm: (data: {originalUrl: string, customUrl : string}) => void
}

const useUrlFormStore = create<UrlFormStore>((set) => ({
    urlForm: {originalUrl: '', customUrl: ''},
    setUrlForm: (data) => set({urlForm: {originalUrl: data.originalUrl, customUrl: data.customUrl}})
}));

export type UrlFormValues = UrlFormStore['urlForm'];
export default useUrlFormStore;
