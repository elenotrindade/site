<template>
    <div>
        <div class="header">
            <h2>Order Tracking</h2>
        </div>
        <table class="striped-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>Transaction Log</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.status }}</td>
                    <td>
                        <button class="action-button" @click="toggleLog(order.id)">{{ order.showLog ? '- Details' : '+ Details' }}</button>
                        <ul v-if="order.showLog" class="transaction-log">
                            <li v-for="log in order.transactionLog" :key="log">{{ log }}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const orders = ref([
    { id: 1, status: 'Pending', transactionLog: ['Order placed', 'Payment received', 'Processing'], showLog: false },
    { id: 2, status: 'Shipped', transactionLog: ['Order placed', 'Payment received', 'Shipped'], showLog: false },
    { id: 3, status: 'Delivered', transactionLog: ['Order placed', 'Payment received', 'Shipped', 'Delivered'], showLog: false },
    { id: 4, status: 'Processing', transactionLog: ['Order placed', 'Payment received', 'Processing'], showLog: false },
    { id: 5, status: 'Cancelled', transactionLog: ['Order placed', 'Payment received', 'Cancelled'], showLog: false },
    { id: 6, status: 'Completed', transactionLog: ['Order placed', 'Payment received', 'Shipped', 'Delivered', 'Completed'], showLog: false },
    { id: 7, status: 'Returned', transactionLog: ['Order placed', 'Payment received', 'Shipped', 'Delivered', 'Returned'], showLog: false },
]);

function toggleLog(orderId) {
    const order = orders.value.find(o => o.id === orderId);
    if (order) {
        order.showLog = !order.showLog;
    }
}
</script>

<style scoped>
/* Remover estilos duplicados */
</style>
