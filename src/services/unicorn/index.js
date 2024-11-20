import api from '@/services/api';

export const fetchAllUnicorns = async () => {
    try {
        return await api().get('unicorns');
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const createUnicorn = async (payload) => {
    try {
        return await api.post('unicorns', payload);
    } catch (error) {
        console.log(error);
    }
};

export const updateUnicorn = async (payload, id) => {
    try {
        return await api.put(`unicorns/${id}`, payload);
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const deleteUnicorn = async (id) => {
    try {
        return await api.delete(`unicorns/${id}`);
    } catch (error) {
        console.log(error);
        return null;
    }
};
