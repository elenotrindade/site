<template>
    <aside class="sidebar">
        <nav>
            <ul>
                <li :class="{ active: currentView === 'products' }" @click="updateView('products')">Products</li>
                <li :class="{ active: currentView === 'employees' }" @click="updateView('employees')">Employees</li>
                <li :class="{ active: currentView === 'orders' }" @click="updateView('orders')">Orders</li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    currentView: String,
});

const emit = defineEmits(['updateView']);

function updateView(view) {
    emit('updateView', view);
}
</script>
