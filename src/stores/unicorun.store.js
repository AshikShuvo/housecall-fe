import { defineStore } from 'pinia';
import { createUnicorn, deleteUnicorn, fetchAllUnicorns, updateUnicorn } from '@/services/unicorn';

export const useUnicornStore = defineStore('unicornStore', {
    state: () => {
        return {
            unicorns: []
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
            const id = payload._id;
            delete payload._id;
            const updateUnicorn = await updateUnicorn(payload, id);
            if (updateUnicorn) {
                let target = this.unicorns.find((u) => u._id === updateUnicorn._id);
                if (target) {
                    target = updateUnicorn;
                }
            }
        },
        async proceedToDeleteUnicorn(id) {
            const unicorn = await deleteUnicorn(id);
            if (unicorn) {
                this.unicorns.splice(this.unicorns.indexOf(unicorn), 1);
            }
        }
    }
});
