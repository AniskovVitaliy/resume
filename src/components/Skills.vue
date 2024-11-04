<script setup>
defineProps({
    skills: Array,
    language: String
});
</script>

<template>
    <div class="order-1 mb-10">
        <p class="pb-2 text-xl font-bold uppercase border-b-2" v-if="language === 'en'">Skills</p>
        <p class="pb-2 text-xl font-bold uppercase border-b-2" v-else>Ключевые навыки</p>
        <ul class="my-3 text-sm">
            <li class="mb-2" v-for="skill in skills">{{ skill }}</li>
        </ul>
    </div>
</template>