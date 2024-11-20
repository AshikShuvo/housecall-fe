import { defineStore } from 'pinia';
import { createUnicorn, deleteUnicorn, fetchAllUnicorns, updateUnicorn } from '@/services/unicorn';

export const useUnicornStore = defineStore('unicornStore', {
    state: () => {
        return {
            unicorns: [],
            itemsPerPage: 5,
            currentPage: 0,
            selectedSort: ''
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
            // Copy unicorns to avoid mutating the state
            let sortedUnicorns = [...state.unicorns];
            // Apply sorting based on selectedSort
            if (state.selectedSort === 'ascending') {
                sortedUnicorns.sort((a, b) => a.age - b.age);
            } else if (state.selectedSort === 'descending') {
                sortedUnicorns.sort((a, b) => b.age - a.age);
            } else if (state.selectedSort === 'name') {
                sortedUnicorns.sort((a, b) => a.name.localeCompare(b.name));
            }

            // Apply pagination
            const start = state.currentPage * state.itemsPerPage;
            const end = start + state.itemsPerPage;
            return sortedUnicorns.slice(start, end);
        }
    }
});
