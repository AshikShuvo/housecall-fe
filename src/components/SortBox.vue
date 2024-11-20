<script setup>
import { useUnicornStore } from '@/stores/unicorun.store';
import { storeToRefs } from 'pinia';

const unicornStore = useUnicornStore();
const { selectedSort } = storeToRefs(unicornStore);
const sortOptions = [
    {
        value: 'ascending',
        label: 'Ascending by Age'
    },
    {
        value: 'descending',
        label: 'Descending by Age'
    },
    {
        value: 'name',
        label: 'By Name'
    }
];
</script>
<template>
    <Select v-model="selectedSort" :options="sortOptions" option-value="value" optionLabel="label" placeholder="Select sorting option" checkmark :highlightOnSelect="false" class="w-15 m-4" />
</template>
