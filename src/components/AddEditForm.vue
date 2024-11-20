<script setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const emit = defineEmits(['create-event', 'edit-event']);
const props = defineProps({
    closeModal: {
        type: Function,
        default: () => {}
    },
    initialValue: {
        type: Object,
        default: () => ({})
    }
});
const validationSchema = toTypedSchema(
    object({
        name: string().required(),
        age: string().required(),
        colour: string().required()
    })
);
const route = useRoute();
const { defineField, errors, handleSubmit, resetForm } = useForm({
    validationSchema,
    initialValues: { ...props.initialValue }
});

const [name, nameAttrs] = defineField('name');
const [age, ageAttrs] = defineField('age');
const [colour, colourAttrs] = defineField('colour');
const emitHandler = handleSubmit((value) => {
    if (route.name === 'Unicorn-add') {
        emit('create-event', value);
    } else {
        emit('edit-event', value);
    }
});
const resetAndClose = () => {
    resetForm();
    props.closeModal();
};
const submitButtonTitle = computed(() => {
    if (route.name === 'Unicorn-add') {
        return 'create';
    }
    return 'Edit';
});
</script>
<template>
    <div class="card flex flex-col gap-4">
        <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText id="name" type="text" v-model="name" v-bind="nameAttrs" />
            <span class="text-red-800">{{ errors.name }}</span>
        </div>
        <div class="flex flex-col gap-2">
            <label for="age">Age</label>
            <InputText id="age" type="text" v-model="age" v-bind="ageAttrs" />
            <span class="text-red-800">{{ errors.age }}</span>
        </div>
        <div class="flex flex-col gap-2">
            <label for="color">Color</label>
            <InputText id="color" type="text" v-model="colour" v-bind="colourAttrs" />
            <span class="text-red-800">{{ errors.colour }}</span>
        </div>
        <div class="w-full flex justify-end align-middle gap-2">
            <Button outlined @click="resetAndClose">Cancel</Button>
            <Button @click="emitHandler">{{ submitButtonTitle }}</Button>
        </div>
    </div>
</template>
