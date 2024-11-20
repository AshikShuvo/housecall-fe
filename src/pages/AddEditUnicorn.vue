<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import AddEditForm from '@/components/AddEditForm.vue';
import { useUnicornStore } from '@/stores/unicorun.store';

const props = defineProps({
    unicornToEdit: {
        type: Object,
        default: () => ({})
    },
    clearEditState: {
        type: Function,
        default: () => {}
    }
});
const unicornStore = useUnicornStore();
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
const handleCreate = (payload) => {
    unicornStore.proceedToCreateUnicorn(payload);
    router.back();
};
const handleEdit = (payload) => {
    unicornStore.proceedToUpdateUnicorn(payload);
    props.clearEditState();
    router.back();
};
const title = computed(() => (route.name === 'Unicorn-add' ? 'Add Unicorn' : 'Update Unicorn'));
</script>
<template>
    <Dialog v-model:visible="toggleModal" :style="{ width: '450px' }" :header="title" :modal="true">
        <AddEditForm :closeModal="closeModal" @create-event="handleCreate" :initialValue="props.unicornToEdit" @edit-event="handleEdit" />
    </Dialog>
</template>
