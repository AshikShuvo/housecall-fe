<script setup>
import UnicornCard from '@/components/UnicornCard.vue';
import { useUnicornStore } from '@/stores/unicorun.store';
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import PaginatonComponent from '@/components/PaginatonComponent.vue';

const unicornStore = useUnicornStore();
const { paginatedUnicorns } = storeToRefs(unicornStore);
const handleDelete = (id) => {
    unicornStore.proceedToDeleteUnicorn(id);
};
onMounted(() => {
    unicornStore.getUnicorns();
});
</script>
<template>
    <div id="dashboard">
        <router-view />
        <div class="card flex flex-row justify-between align-middle">
            <p class="title">Welcome John</p>
            <RouterLink to="/add-unicorn">
                <Button> Create Unicorn</Button>
            </RouterLink>
        </div>
        <UnicornCard v-for="(unicorn, index) in paginatedUnicorns" :key="unicorn._id" :unicorn="unicorn" :index="index" @delete-unicorn="handleDelete" />
        <PaginatonComponent />
    </div>
</template>
