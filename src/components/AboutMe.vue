<script setup>
defineProps({
    profile: Object,
    language: String
});
</script>

<template>
    <div class="h-[242px] max-md:h-[200px]">
        <h1 class="mb-3 text-6xl font-bold max-md:text-4xl">{{ profile[language].name }}</h1>
        <h3 class="text-3xl max-md:text-xl">{{ profile[language].position }}</h3>
    </div>
    <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2 max-md:text-xl" v-if="language==='en'">About me</h2>
    <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2 max-md:text-xl" v-else>Обо мне</h2>
    <div class="mb-10 max-md:text-sm" v-html="profile[language].aboutMe"></div>
</template>