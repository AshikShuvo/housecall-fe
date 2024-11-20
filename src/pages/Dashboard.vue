<script setup>
import UnicornCard from '@/components/UnicornCard.vue';
import { useUnicornStore } from '@/stores/unicorun.store';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const unicornStore = useUnicornStore();
const { unicorns } = storeToRefs(unicornStore);
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
        <UnicornCard v-for="(unicorn, index) in unicorns" :key="unicorn._id" :unicorn="unicorn" :index="index" />
        <Paginator
            :template="{
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
            }"
            :rows="5"
            :totalRecords="120"
        >
        </Paginator>
    </div>
</template>
