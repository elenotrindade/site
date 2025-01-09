<template>
    <div>
        <div class="header">
            <h2>Product List</h2>
            <button class="add-button" @click="toggleProductForm">{{ showProductForm ? 'Close' : 'Add +' }}</button>
        </div>
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
                    <td><button class="action-button" @click="editProduct(product)">Editer</button></td>
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

function addProduct() {
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
}

function cancelEdit() {
    resetProductForm();
}

function resetProductForm() {
    newProduct.value = { name: '', price: 0 };
    showProductForm.value = false;
    editMode.value = false;
}

function toggleProductForm() {
    showProductForm.value = !showProductForm.value;
    if (!showProductForm.value) {
        resetProductForm();
    }
}
</script>

<style scoped>
/* Remover estilos duplicados */
</style>
