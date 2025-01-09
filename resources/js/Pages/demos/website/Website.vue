<template>
    <div id="css-loaded" class="landing-page">
        <div class="background">
            <Header />
            <Banner />
        </div>
        <div class="bg-default">
            <ProductList />
        </div>
        <Newsletter />
        <div class="bg-default">
            <Reviews />
        </div>
        <ContactFooter />
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Banner from './Banner.vue';
import ProductList from './ProductList.vue';
import Newsletter from './Newsletter.vue';
import Reviews from './Reviews.vue';
import ContactFooter from './ContactFooter.vue';
</script>

<style scoped>
.hidden {
    display: none;
}

.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    color: #333;
}
</style>
