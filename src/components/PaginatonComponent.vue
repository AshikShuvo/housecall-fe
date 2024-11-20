<script setup>
import { useUnicornStore } from '@/stores/unicorun.store';
import { storeToRefs } from 'pinia';

const unicornStore = useUnicornStore();
const { itemsPerPage, currentPage, totalUnicorns } = storeToRefs(unicornStore);
const handlePage = ({ page }) => {
    currentPage.value = page;
};
</script>

<template>
    <Paginator
        :template="{
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
        }"
        :rows="itemsPerPage"
        :totalRecords="totalUnicorns"
        @page="handlePage"
    >
    </Paginator>
</template>
