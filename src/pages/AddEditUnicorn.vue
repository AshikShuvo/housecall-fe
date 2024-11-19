<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import AddEditForm from '@/components/AddEditForm.vue';

const router = useRouter();
const route = useRoute();
const toggleModal = computed({
    get() {
        return true;
    },
    set() {
        router.back();
    }
});
const closeModal = () => {
    router.back();
};
const title = computed(() => (route.name === 'Unicorn-add' ? 'Add Unicorn' : 'Update Unicorn'));
</script>
<template>
    <Dialog v-model:visible="toggleModal" :style="{ width: '450px' }" :header="title" :modal="true">
        <AddEditForm :closeModal="closeModal" />
    </Dialog>
</template>
