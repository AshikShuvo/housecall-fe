import axios from 'axios';
import { useSiteStore } from '@/stores/site.store';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use(
    (config) => {
        useSiteStore().setGlobalLoading(true);
        return config;
    },
    (error) => {
        useSiteStore().setGlobalLoading(false);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        useSiteStore().setGlobalLoading(false);
        return response.data;
    },
    (error) => {
        useSiteStore().setGlobalLoading(false);
        // toast({
        //     variant: 'destructive',
        //     title: 'API Error',
        //     description: error.response?.data?.message?.message
        // });

        console.error('API Error:', error.response?.data?.message?.message || error.message);
        return Promise.reject(error);
    }
);

export default api;
