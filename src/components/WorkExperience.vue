<script setup>
defineProps({
    workExperiences: Object,
    language: String
});
</script>

<template>
    <h2 class="pb-2 mb-6 text-3xl font-bold uppercase border-b-2 border-black max-md:text-xl" v-if="language === 'en'">Work Experience</h2>
    <h2 class="pb-2 mb-6 text-3xl font-bold uppercase border-b-2 border-black max-md:text-xl" v-else>Опыт работы</h2>
    <div class="border-l-2 border-zinc-700 relative">
        <div class="absolute -left-2 -top-0 size-3 bg-white border-2 border-zinc-700"></div>
        <div class="absolute -left-2 top-[50%] mt-[-6px] size-3 bg-white border-2 border-zinc-700"></div>
        <div class="absolute -left-2 -bottom-0 size-3 bg-white border-2 border-zinc-700"></div>
        <div class="pl-5 mb-10 max-md:mb-5" v-for="workExperience in workExperiences[language]">
            <div class="flex justify-between max-md:flex-col">
                <span class="font-bold text-lg max-md:text-base">{{ workExperience.place }}</span>
                <span class="max-md:text-sm">{{ workExperience.date }}</span>
            </div>
            <p class="italic max-md:text-sm">{{ workExperience.role }}</p>
            <div v-for="content in workExperience.content">
                <p class="mt-2 font-bold max-md:text-sm" v-if="content.name">{{ content.name }}:</p>
                <p class="h-2" v-else></p>
                <ul class="mb-2 list-disc list-inside max-md:text-sm">
                    <li v-for="item in content.data"><span v-html="item"></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>