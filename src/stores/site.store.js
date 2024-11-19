import { defineStore } from 'pinia';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        globalLoadingCount: 0
    }),
    getters: {
        isGlobalLoading: (state) => {
            return state.globalLoadingCount > 0;
        }
    },
    actions: {
        setGlobalLoading(isLoading) {
            this.state.globalLoadingCount = isLoading ? this.state.globalLoadingCount + 1 : Math.max(0, this.state.globalLoadingCount - 1);
        }
    }
});
