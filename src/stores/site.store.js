import { defineStore } from 'pinia';

export const useSiteStore = defineStore('siteStore', {
    state: () => {
        return {
            globalLoadingCount: 0
        };
    },
    getters: {
        isGlobalLoading: (state) => {
            return state.globalLoadingCount > 0;
        }
    },
    actions: {
        setGlobalLoading(isLoading) {
            if (isLoading) {
                this.globalLoadingCount++;
            } else {
                this.globalLoadingCount = Math.max(0, this.globalLoadingCount - 1);
            }
        }
    }
});
