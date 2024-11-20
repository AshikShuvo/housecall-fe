import { useApi } from '@/services/api';

export const fetchAllUnicorns = async () => {
    const { api } = useApi();
    try {
        return await api.get('unicorns');
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const createUnicorn = async (payload) => {
    const { api } = useApi();
    try {
        const data = await api.post('unicorns', payload);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateUnicorn = async (payload, id) => {
    const { api } = useApi();
    try {
        return await api.put(`unicorns/${id}`, payload);
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const deleteUnicorn = async (id) => {
    const { api } = useApi();
    try {
        return await api.delete(`unicorns/${id}`);
    } catch (error) {
        console.log(error);
        return null;
    }
};
