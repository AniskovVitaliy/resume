<script setup>
import Menu from "@/components/Menu.vue";
import BaseInfo from "@/components/BaseInfo.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperience from "@/components/WorkExperience.vue";

import {ref} from 'vue';
import {config} from "@/config.js";
import 'flowbite';

const aboutMe = ref(config.aboutMe);
const baseInfo = ref(config.baseInfo);
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

function setLanguage(languageName) {
    language.value = languageName;
    localStorage.setItem('language', languageName);
}
</script>

<template>
    <Menu
        @updateLanguage="(languageName) => setLanguage(languageName)"
    />
    <div class="flex justify-between font-sans max-lg:flex-col-reverse">
        <div class="min-w-[350px] flex justify-center p-10 bg-zinc-700 max-md:p-5">
            <div>
                <div class="flex justify-center max-lg:hidden">
                    <div class="w-[200px] h-[200px] bg-cover bg-no-repeat bg-center border-2 border-white rounded-full"
                         style="background-image: url(./photo.jpg)"></div>
                </div>
                <BaseInfo
                    :baseInfo="baseInfo"
                    :language="language"
                />
            </div>
        </div>
        <div class="w-[100%] p-10 max-md:p-5">
            <div class="max-w-[900px]">
                <AboutMe
                    :language="language"
                    :profile="aboutMe"
                />
                <WorkExperience
                    :workExperiences="workExperiences"
                    :language="language"
                />
            </div>
        </div>
    </div>
</template>