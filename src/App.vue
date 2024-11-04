<script setup>
import MainImage from '@/components/MainImage.vue'
import BaseInfo from "@/components/BaseInfo.vue";
import ProfileText from "@/components/ProfileText.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Skills from "@/components/Skills.vue";

import {ref} from 'vue';
import {config} from "@/config.js";

const commonInfo = ref(config.commonInfo);
const contactsInfo = ref(config.contacts);
const skills = ref(config.skills);
const workExperiences = ref(config.workExperiences);

const language = ref(localStorage.getItem('language') ?? checkGetParameter() ?? 'en');

function checkGetParameter() {
    let language = null;

    if (window.location.search === '?ru') {
        language = 'ru';
    }

    if (window.location.search === '?en') {
        language = 'en';
    }

    return language;
}

function setLanguage(value) {
    localStorage.setItem('language', value);
    language.value = value
}

</script>

<template>
    <div class="fixed top-2 right-2 bg-zinc-700 text-white">
        <button class="m-4" @click="setLanguage('ru')">RU</button>
        <button class="m-4" @click="setLanguage('en')">EN</button>
<!--        <button class="m-4" @click="exportToPdf">CV</button>-->
    </div>
    <div class="flex font-sans max-lg:flex-col-reverse" id="element-to-convert">
        <div class="flex justify-center p-10 bg-zinc-700">
            <div class="text-white">
                <MainImage/>
                <div class="max-lg:grid max-lg:grid-cols-2 max-lg:gap-12 max-sm:grid-cols-1">
                    <BaseInfo
                        :contactsInfo="contactsInfo"
                        :language="language"
                    />
                    <div class="order-3 mb-10" v-if="language === 'en'">
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Education</p>
                        <ul class="my-3 text-sm">
                            <li class="mb-2">2016 - 2021</li>
                            <li class="mb-2">Gomel State University name after F.Skorina</li>
                            <li class="mb-2">Software developer</li>
                        </ul>
                    </div>
                    <div class="order-3 mb-10" v-else>
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Образование</p>
                        <ul class="my-3 text-sm">
                            <li class="mb-2">2016-2021</li>
                            <li class="mb-2">Гомельский университет имени Ф.Скорина</li>
                            <li class="mb-2">Инженер программист</li>
                        </ul>
                    </div>
                    <Skills
                        :skills="skills"
                        :language="language"
                    />
                    <div class="order-2" v-if="language === 'en'">
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Languages</p>
                        <ul class="my-3 text-sm">
                            <li class="mb-2">English (A2)</li>
                            <li class="mb-2">Russian (Native)</li>
                        </ul>
                    </div>
                    <div class="order-2" v-else>
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Языки</p>
                        <ul class="my-3 text-sm">
                            <li>Английский (A2)</li>
                            <li>Русский (родной)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-10 max-w-5xl">
            <ProfileText
                :language="language"
                :commonInfo="commonInfo"
            />
            <h2 class="pb-2 mb-6 text-3xl font-bold uppercase border-b-2 border-black" v-if="language === 'en'">Work Experience</h2>
            <h2 class="pb-2 mb-6 text-3xl font-bold uppercase border-b-2 border-black" v-else>Опыт работы</h2>
            <div class="border-l-2 border-zinc-700 relative">
                <div class="absolute -left-2 -top-0 size-3 bg-white border-2 border-zinc-700"></div>
                <div class="absolute -left-2 top-[50%] mt-[-6px] size-3 bg-white border-2 border-zinc-700"></div>
                <div class="absolute -left-2 -bottom-0 size-3 bg-white border-2 border-zinc-700"></div>
                <WorkExperience
                    :workExperiences="workExperiences"
                    :language="language"
                />
            </div>
        </div>
    </div>
</template>