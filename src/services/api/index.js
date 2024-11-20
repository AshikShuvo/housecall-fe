import axios from 'axios';
import { useSiteStore } from '@/stores/site.store';
import { useToast } from 'primevue/usetoast';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL + import.meta.env.VITE_API_KEY
});
export const useApi = () => {
    const siteStore = useSiteStore();
    api.interceptors.request.use(
        (config) => {
            siteStore.setGlobalLoading(true);
            return config;
        },
        (error) => {
            // siteStore.setGlobalLoading(false);
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => {
            siteStore.setGlobalLoading(false);
            return response.data ?? response;
        },
        (error) => {
            siteStore.setGlobalLoading(false);
            console.error('API Error:', error.response?.data?.message?.message || error.message);
            return Promise.reject(error);
        }
    );

    return { api };
};
