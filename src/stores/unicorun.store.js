import { defineStore } from 'pinia';
import { createUnicorn, deleteUnicorn, fetchAllUnicorns, updateUnicorn } from '@/services/unicorn';

export const useUnicornStore = defineStore('unicornStore', {
    state: () => {
        return {
            unicorns: [],
            itemsPerPage: 5,
            currentPage: 0
        };
    },
    actions: {
        async getUnicorns() {
            this.unicorns = await fetchAllUnicorns();
        },
        async proceedToCreateUnicorn(payload) {
            const unicorn = await createUnicorn(payload);
            if (unicorn) {
                this.unicorns.push(unicorn);
            }
        },
        async proceedToUpdateUnicorn(payload) {
            try {
                const id = payload._id;
                delete payload._id;
                await updateUnicorn(payload, id);
                this.getUnicorns();
            } catch (error) {
                console.log(error);
            }
        },
        async proceedToDeleteUnicorn(id) {
            try {
                await deleteUnicorn(id);
                this.getUnicorns();
            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {
        totalUnicorns: (state) => {
            return state.unicorns.length;
        },
        paginatedUnicorns: (state) => {
            const start = state.currentPage * state.itemsPerPage;
            const end = start + state.itemsPerPage;
            return state.unicorns.slice(start, end);
        }
    }
});
