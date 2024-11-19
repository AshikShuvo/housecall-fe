<script setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

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
        color: string().required()
    })
);
const { defineField, errors, handleSubmit, resetForm } = useForm({
    validationSchema,
    initialValues: { ...props.initialValue }
});

const [name, nameAttrs] = defineField('name');
const [age, ageAttrs] = defineField('age');
const [color, colorAttrs] = defineField('color');
const emitCreate = handleSubmit((value) => {
    console.log(value);
});
const resetAndClose = () => {
    resetForm();
    props.closeModal();
};
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
            <InputText id="color" type="text" v-model="color" v-bind="colorAttrs" />
            <span class="text-red-800">{{ errors.color }}</span>
        </div>
        <div class="w-full flex justify-end align-middle gap-2">
            <Button outlined @click="resetAndClose">Cancel</Button>
            <Button @click="emitCreate">Create</Button>
        </div>
    </div>
</template>
