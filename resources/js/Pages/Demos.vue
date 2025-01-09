<template>
    <div class="demo-selector">
        <button class="demo-button" data-demo="erp" @click="showDemo('erp')">ERP</button>
        <button class="demo-button" data-demo="website" @click="showDemo('website')">Website</button>
        <button class="demo-button" data-demo="statistics" @click="showDemo('statistics')">Statistics</button>
    </div>
    <div v-if="currentDemo">
        <ERP v-if="currentDemo === 'erp'" />
        <Website v-if="currentDemo === 'website'" />
        <Statistics v-if="currentDemo === 'statistics'" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ERP from './demos/erp/ERP.vue';
import Website from './demos/website/Website.vue';
import Statistics from './demos/Statistics.vue';

const currentDemo = ref('');

function showDemo(demo) {
    currentDemo.value = demo;
}
</script>

<style scoped>
.demo-selector {
    margin-bottom: 20px;
    text-align: center;
}
.demo-button {
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid #B4A9C7 !important;
}
.demo-button:hover {
    background-color: #453561;
}
</style>
