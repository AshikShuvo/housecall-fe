import { defineStore } from 'pinia';
import { createUnicorn, deleteUnicorn, fetchAllUnicorns, updateUnicorn } from '@/services/unicorn';

export const useUnicornStore = defineStore('siteStore', {
    state: () => ({
        unicorns: []
    }),
    actions: {
        async getUnicorns() {
            this.state.unicorns = await fetchAllUnicorns();
        },
        async proceedToCreateUnicorn(payload) {
            const unicorn = await createUnicorn(payload);
            if (unicorn) {
                this.state.unicorns.push(unicorn);
            }
        },
        async proceedToUpdateUnicorn(payload) {
            const id = payload.id;
            delete payload.id;
            const updateUnicorn = await updateUnicorn(payload, id);
            if (updateUnicorn) {
                let target = this.state.unicorns.find((u) => u.id === updateUnicorn.id);
                if (target) {
                    target = updateUnicorn;
                }
            }
        },
        async proceedToDeleteUnicorn(id) {
            const unicorn = await deleteUnicorn(id);
            if (unicorn) {
                this.state.unicorns.splice(this.state.unicorns.indexOf(unicorn), 1);
            }
        }
    }
});
