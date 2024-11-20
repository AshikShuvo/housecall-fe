<script setup>
import UnicornCard from '@/components/UnicornCard.vue';
import { useUnicornStore } from '@/stores/unicorun.store';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import PaginatonComponent from '@/components/PaginatonComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const unicornToEdit = ref(null);
const unicornStore = useUnicornStore();
const { paginatedUnicorns, unicorns } = storeToRefs(unicornStore);
const handleDelete = (id) => {
    unicornStore.proceedToDeleteUnicorn(id);
};
onMounted(() => {
    unicornStore.getUnicorns();
});
const getVariant = (index) => {
    const colors = ['red', 'green', 'blue'];
    return colors[index % colors.length];
};
const handleEditRoute = (id) => {
    unicornToEdit.value = unicorns.value.find((it) => it._id === id) ?? null;
    router.push({ name: 'Unicorn-edit' });
};
const clearEditState = () => {
    unicornToEdit.value = null;
};
</script>
<template>
    <div id="dashboard">
        <router-view :unicornToEdit="unicornToEdit" :clearEditState="clearEditState" />
        <div class="card flex flex-row justify-between align-middle">
            <p class="title">Welcome John</p>
            <RouterLink to="/add-unicorn">
                <Button> Create Unicorn</Button>
            </RouterLink>
        </div>
        <UnicornCard v-for="(unicorn, index) in paginatedUnicorns" :key="unicorn._id" :unicorn="unicorn" :index="index" @delete-unicorn="handleDelete" @edit-unicorn="handleEditRoute" :variant="getVariant(index)" />
        <PaginatonComponent />
    </div>
</template>
