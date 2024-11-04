<script setup>
defineProps({
    commonInfo: Object,
    language: String
});

</script>

<template>
    <div class="h-[242px]">
        <h1 class="mb-3 text-6xl font-bold">{{ commonInfo[language].name }}</h1>
        <h3 class="text-3xl">{{ commonInfo[language].position }}</h3>
    </div>
    <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2" v-if="language==='en'">About me</h2>
    <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2" v-else>Обо мне</h2>
    <div class="mb-10" v-html="commonInfo[language].aboutMe"></div>
</template>