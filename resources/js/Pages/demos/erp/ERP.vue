<template>
    <div class="erp-system">
        <SidebarMenu :currentView="currentView" @updateView="updateView" />
        <main class="main-content">
            <ProductManager v-if="currentView === 'products'" />
            <EmployeeManager v-if="currentView === 'employees'" />
            <OrderList v-if="currentView === 'orders'" />
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarMenu from './SidebarMenu.vue';
import ProductManager from './managers/ProductManager.vue';
import EmployeeManager from './managers/EmployeeManager.vue';
import OrderList from './lists/OrderList.vue';

const currentView = ref('products');

function updateView(view) {
    currentView.value = view;
}
</script>

<style scoped>
.erp-system {
    color: white;
}
</style>
