<script setup>
import UnicornCard from '@/components/UnicornCard.vue';
</script>
<template>
    <div id="dashboard">
        <router-view />
        <div class="card flex flex-row justify-between align-middle">
            <p class="!text-xl font-bold align-middle">Welcome John</p>
            <RouterLink to="/add-unicorn">
                <Button> Create Unicorn</Button>
            </RouterLink>
        </div>
        <UnicornCard />
        <UnicornCard />
        <UnicornCard />
    </div>
</template>
