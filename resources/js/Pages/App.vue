<template>
    <Head title="eleno.dev" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div id="app" class="text-black/50 dark:text-white/50">
            <div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <div class="background-animation"></div>
                    <div class="falling-diamonds"></div>
                    <main class="mt-6 text-center relative z-10">
                        <div class="hello-languages" id="hello-languages">
                            <span>{{ displayText }}</span><span class="cursor"></span>
                        </div>
                        <div class="info-box">
                            <h2>Eleno Trindade</h2>
                            <p>Full Stack Developer</p>
                            <p class="contact-text">Entre em contato</p>
                            <div class="social-icons">
                                <a href="https://github.com/elenotrindade" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="https://linkedin.com/in/elenotrindade" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="demos-box">
                            <Demos />
                        </div>
                    </main>

                    <footer class="py-16 text-center text-sm text-black dark:text-white/70 relative z-10">
                        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import Demos from './Demos.vue';

const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const texts = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "你好", "Olá"];
const currentText = ref('');
const index = ref(0);
const count = ref(0);
const isDeleting = ref(false);

const displayText = computed(() => currentText.value);

function type() {
    let fullText = texts[count.value % texts.length];
    if (isDeleting.value) {
        currentText.value = fullText.substring(0, currentText.value.length - 1);
    } else {
        currentText.value = fullText.substring(0, currentText.value.length + 1);
    }

    if (!isDeleting.value && currentText.value === fullText) {
        setTimeout(() => isDeleting.value = true, 200);
    } else if (isDeleting.value && currentText.value === '') {
        isDeleting.value = false;
        count.value++;
    }

    setTimeout(type, 150);
}

onMounted(() => {
    type();
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>
