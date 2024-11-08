<script setup>
defineProps({
    baseInfo: Object,
    language: String
});
</script>

<template>
    <div class="text-white max-lg:grid max-lg:grid-cols-2 max-lg:gap-12 max-sm:grid-cols-1 max-md:gap-6">
        <div class="order-4 mt-16 mb-10 max-lg:m-0">
            <p class="pb-2 text-xl font-bold uppercase border-b-2 max-lg:mt-0" v-if="language === 'en'">Contact</p>
            <p class="pb-2 text-xl font-bold uppercase border-b-2 max-lg:mt-0" v-else>Контакты</p>
            <ul class="text-sm my-3">
                <li class="mb-4" v-for="contact in baseInfo.contacts">
                    <a :href="contact.href"><span class="mr-2" v-html="contact.ico"></span>{{ contact.text }}</a>
                </li>
            </ul>
        </div>
        <div class="order-3 mb-10 max-lg:m-0">
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-if="language === 'en'">Education</p>
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-else>Образование</p>
            <ul class="text-sm my-3" v-for="education in baseInfo.education[language]">
                <li class="mb-2">{{ education.data }}</li>
                <li class="mb-2">{{ education.university }}</li>
                <li class="mb-2">{{ education.position }}</li>
            </ul>
        </div>
        <div class="order-1 mb-10 max-lg:m-0">
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-if="language === 'en'">Skills</p>
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-else>Ключевые навыки</p>
            <ul class="text-sm my-3">
                <li class="mb-2" v-for="skill in baseInfo.skills">{{ skill }}</li>
            </ul>
        </div>
        <div class="order-2">
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-if="language === 'en'">Languages</p>
            <p class="pb-2 text-xl font-bold uppercase border-b-2" v-else>Языки</p>
            <ul class="my-3 text-sm">
                <li class="mb-2" v-for="language in baseInfo.languages[language]">{{ language }}</li>
            </ul>
        </div>
    </div>
</template>