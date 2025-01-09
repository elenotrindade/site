<template>
    <div class="bg-default">
        <section class="reviews" id="reviews">
            <h2>Reviews</h2>
            <div class="reviews-list">
                <div class="review" v-for="(product, index) in products" :key="product.id">
                    <div class="user-icon">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="review-content">
                        <p class="user-name">{{ userNames[index] }}</p>
                        <p class="stars">★★★★★</p>
                        <p>Excellent product! Highly recommend.</p>
                        <h3 style="margin-top:1rem">{{ product.name }}</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>   
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

const userNames = ref(['Alice', 'Sophia', 'Emma']);
</script>

<style scoped>
.review-content {
    color: black;
    margin-bottom: 20px;
}
</style>