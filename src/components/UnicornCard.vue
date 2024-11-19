<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: { type: String, default: 'red' }
});
const colorByVariant = computed(() => {
    switch (props.variant) {
        case 'red':
            return 'red-border';
        case 'green':
            return 'green-border';
        case 'blue':
            return 'blue-border';
        default:
            return 'red-border';
    }
});
</script>

<template>
    <div class="card unicorn-card w-full" :class="colorByVariant">
        <div class="w-full flex justify-between align-middle gap-4">
            <div class="flex-grow flex justify-start align-middle gap-8">
                <div class="flex flex-col justify-start align-middle gap-2">
                    <p class="muted-header">No</p>
                    <p class="bold-inf0">1</p>
                </div>
                <div class="flex flex-col justify-start align-middle gap-2">
                    <p class="muted-header">Doctor Name</p>
                    <p class="bold-inf0">Ashik Ahmmed</p>
                </div>
                <div class="flex flex-col justify-start align-middle gap-2">
                    <p class="muted-header">age</p>
                    <p class="bold-inf0">266</p>
                </div>
                <div class="flex flex-col justify-start align-middle gap-2">
                    <p class="muted-header">Color</p>
                    <p class="bold-inf0">black</p>
                </div>
                <div class="flex flex-col justify-start align-middle gap-2">
                    <p class="muted-header">Status</p>
                    <p class="bold-inf0">Baby</p>
                </div>
            </div>
            <div class="flex justify-center align-middle gap-2">
                <Button outlined size="sm">Edit</Button>
                <Button icon="pi pi-trash" aria-label="delete" severity="danger" />
            </div>
        </div>
        <Fieldset legend="Details" :toggleable="true" :collapsed="true">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>
