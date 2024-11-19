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
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
            }"
            :rows="10"
            :totalRecords="120"
        >
        </Paginator>
    </div>
</template>
