<script setup>
import UnicornCard from '@/components/UnicornCard.vue';
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
        <UnicornCard />
        <UnicornCard />
        <UnicornCard />
        <UnicornCard />
        <UnicornCard />
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
