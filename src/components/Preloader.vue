<template>
    <div v-if="isGlobalLoading" class="!absolute !h-screen !w-screen backdrop-blur !flex !flex-col !justify-center !items-center !z-50">
        <img alt="Loading" src="@/assets/loading.gif" />
    </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/site.store';
import { storeToRefs } from 'pinia';

const siteStore = useSiteStore();
const { isGlobalLoading } = storeToRefs(siteStore);
</script>
