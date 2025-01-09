<template>
    <div>
        <form @submit.prevent="save">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="product.name">
            <label for="productPrice">Price:</label>
            <input type="number" id="productPrice" v-model="product.price">
            <div class="form-buttons">
                <button type="submit" class="form-button">{{ editMode ? 'Update' : 'Save' }}</button>
                <button type="button" class="form-button" @click="$emit('cancel')">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object,
    editMode: Boolean,
});

const emit = defineEmits(['save', 'cancel']);

function save() {
    emit('save');
}
</script>

<style scoped>
form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
form label {
    display: block;
    margin: 10px 0 5px;
}
form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #B4A9C7;
    border-radius: 5px;
    background-color: transparent;
}
.form-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-self: center;
}
.form-button {
    padding: 5px 10px;
    background-color: transparent;
    color: white;
    border: 1px solid #4CAF50;
    cursor: pointer;
    border-radius: 5px;
}
.form-button:hover {
    background-color: #45a049;
}
</style>
