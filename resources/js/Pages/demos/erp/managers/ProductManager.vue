<template>
    <div>
        <div class="header">
            <h2>Product Manager</h2>
            <button class="add-button" @click="toggleProductForm">{{ showProductForm ? 'Close' : 'Add +' }}</button>
        </div>
        <transition name="fade">
            <div :class="['error-message', { hidden: !errorMessage }]" v-if="errorMessage">{{ errorMessage }}</div>
        </transition>
        <table class="striped-table" v-if="!showProductForm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.name">
                    <td>{{ product.name }}</td>
                    <td>${{ product.price }}</td>
                    <td><button class="action-button" @click="editProduct(product)">Edit</button></td>
                </tr>
            </tbody>
        </table>
        <ProductForm v-if="showProductForm" :product="newProduct" :editMode="editMode" @save="addProduct" @cancel="cancelEdit" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductForm from '../forms/ProductForm.vue';

const newProduct = ref({ name: '', price: 0 });
const products = ref([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 },
]);
const showProductForm = ref(false);
const editMode = ref(false);
const errorMessage = ref('');

function addProduct() {
    if (!newProduct.value.name || newProduct.value.price <= 0) {
        errorMessage.value = 'Product name cannot be empty and price must be greater than 0.';
        setTimeout(() => {
            errorMessage.value = '';
        }, 3000);
        return;
    }
    if (editMode.value) {
        const index = products.value.findIndex(p => p.name === newProduct.value.name);
        products.value[index] = { ...newProduct.value };
    } else {
        products.value.push({ ...newProduct.value });
    }
    resetProductForm();
}

function editProduct(product) {
    newProduct.value = { ...product };
    showProductForm.value = true;
    editMode.value = true;
    errorMessage.value = '';
}

function cancelEdit() {
    resetProductForm();
}

function resetProductForm() {
    newProduct.value = { name: '', price: 0 };
    showProductForm.value = false;
    editMode.value = false;
    errorMessage.value = '';
}

function toggleProductForm() {
    showProductForm.value = !showProductForm.value;
    if (!showProductForm.value) {
        resetProductForm();
    }
}
</script>

<style scoped>
.add-button {
    padding: 5px 10px;
    background-color: transparent;
    color: white;
    border: 1px solid #4CAF50;
    cursor: pointer;
    border-radius: 5px;
}
.add-button:hover {
    background-color: #45a049;
}
.error-message {
    color: white;
    border: 1px solid red;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: opacity 1s ease-out, max-height 1s ease-out, padding 1s ease-out, margin-bottom 1s ease-out;
    max-height: 100px;
    overflow: hidden;
}
.error-message.hidden {
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin-bottom: 0;
    border: none;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
