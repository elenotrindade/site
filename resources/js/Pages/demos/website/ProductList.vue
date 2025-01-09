<template>
    <section class="products" id="products">
        <h2>Products</h2>
        <div class="product-list">
            <div class="product" v-for="product in products" :key="product.id" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
                <img :src="product.image" :alt="product.name" />
                <h3>{{ product.name }}</h3>
                <p class="price"><span class="original-price">{{ product.price }}</span> <span class="discounted-price">{{ discountedPrice(product.price) }}</span></p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import diamondRingImage from './imgs/diamond-ring.jpg';
import goldNecklaceImage from './imgs/gold-necklace.jpg';
import silverBraceletImage from './imgs/silver-bracelet.jpg';

const products = ref([
    { id: 1, name: 'Diamond Ring', price: '$5000', image: diamondRingImage },
    { id: 2, name: 'Gold Necklace', price: '$3000', image: goldNecklaceImage },
    { id: 3, name: 'Silver Bracelet', price: '$1500', image: silverBraceletImage },
]);

function discountedPrice(price) {
    const numericPrice = parseFloat(price.replace('$', ''));
    const discounted = numericPrice * 0.5;
    return `$${discounted.toFixed(2)}`;
}

function handleMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = (x - rect.width / 2) / 20;
    const moveY = (y - rect.height / 2) / 20;
    card.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

function handleMouseLeave(event) {
    const card = event.currentTarget;
    card.style.transform = 'translate(0px, 0px)';
}
</script>

<style scoped>
</style>
