<template>
        <section class="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <form @submit.prevent="subscribe">
                <input type="email" v-model="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
            </form>
        </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

function subscribe() {
    alert(`Subscribed with email: ${email.value}`);
    email.value = '';
}
</script>