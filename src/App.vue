<script setup>
import MainImage from '@/components/MainImage.vue'
import BaseInfo from "@/components/BaseInfo.vue";
import ProfileText from "@/components/ProfileText.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Skills from "@/components/Skills.vue";

import {ref} from 'vue';
import html2pdf from "html2pdf.js";

function exportToPdf() {
    html2pdf(document.getElementById('element-to-convert'), {
        filename: 'aniskov-vitaliy-resume.pdf',
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}

const contactsInfo = ref([
    {
        ico: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>`,
        text: '+375(44)511-11-79'
    },
    {
        ico: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>`,
        text: 'vitaliybyaniskov@gmail.com'
    },
    {
        ico: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 inline-block">
                        <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`,
        text: 'https://github.com/AniskovVitaliy'
    }
]);

const skills = ref([
    'PHP (Opencart, Laravel, 1C Bitrix)',
    'JS, JQUERY',
    'Redis',
    'MySQL',
    'Docker',
    'CSS, SCSS',
    'HTML',
    'GIT'
]);

const workExperiences = ref({
    en: [
        {
            date: '01.03.2022 - until today',
            place: 'KSK. Homel. Belarus',
            role: 'Software developer',
            description: 'Development and support web site https://ksk.by',
            technologies: [
                'PHP, Opencart and Laravel (a little)',
                'JS, JQUERY, HTML, CSS',
                'Codeception (test), Xdebug, xprof',
                'PHPstorm, Navicat, Insomnia, GIT'
            ],
            responsibilities: [
                'Development of modules and libraries in Opencart',
                'Developer of frontend using JS, JQUERY, CSS',
                'Development of parser using PHPQuery',
                'Development of tests using the Codeception framework',
                'Profiling using xprof',
                'Writing SQL query'
            ]
        },
        {
            date: '01.11.2021 - 01.03.2022',
            place: 'Media Line Group. Homel. Belarus',
            role: 'Software developer',
            description: 'Outsourcing, development and technical support of websites on 1C Bitrix.',
            technologies: [
                '1C-Bitrix, PHP',
                'JS, JQUERY, HTML, CSS',
                'Rest Api'
            ],
            responsibilities: [
                'Development components using 1C-Bitrix.',
                'Development of parser for unloading goods from docx, xml, csv, as well as web sites.',
                'Working with different APIs: google tag manager, google map, google analytic.',
                'Administration 1C-Bitrix.'
            ]
        }
    ],
    ru: [
        {
            date: '01.03.2022 - до сегодняшнего дня',
            place: 'KSK. Гомель. Беларусь',
            role: 'Инженер программист',
            description: 'Разработка и поддержка сайта https://ksk.by',
            technologies: [
                'PHP, Opencart and Laravel (a little)',
                'JS, JQUERY, HTML, CSS',
                'Codeception (test), Xdebug, xprof',
                'PHPstorm, Navicat, Insomnia, GIT'
            ],
            responsibilities: [
                'Разработка модулей и библиотек в Opencart',
                'Разработка фронтенд с использованием JS, JQUERY, CSS',
                'Разработка парсеров с использованием PHPQuery',
                'Написание тестов с использованием Codeception framework',
                'Профилирование кода на xprof',
                'Написание SQL запросов'
            ]
        },
        {
            date: '01.11.2021 - 01.03.2022',
            place: 'Media Line Group. Гомель. Беларусь',
            role: 'Инженер программист',
            description: 'Аутсорсинг, разработка и техническая поддержка сайтов на 1С Битрикс.',
            technologies: [
                '1C-Bitrix, PHP',
                'JS, JQUERY, HTML, CSS',
                'Rest Api'
            ],
            responsibilities: [
                'Разработка компонентов на 1C-Bitrix.',
                'Разработка парсеров для выгрузки товаров из docx, xml, csv, а так же с сайтов.',
                'Работа с разными API: google tag manager, google map, google analytic.',
                'Администрирование 1C-Bitrix.'
            ]
        }
    ]
});

const language = ref(localStorage.getItem('language') ?? 'en');

function changeLanguage(value) {
    localStorage.setItem('language', value);
    language.value = value
}

</script>

<template>
    <div class="fixed top-2 right-2 bg-zinc-700 text-white">
        <button class="m-4" @click="changeLanguage('ru')">RU</button>
        <button class="m-4" @click="changeLanguage('en')">EN</button>
        <button class="m-4" @click="exportToPdf">PDF</button>
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
                    <div class="order-3" v-if="language === 'en'">
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Education</p>
                        <ul class="my-3 text-sm">
                            <li>2016-2021</li>
                            <li>Gomel State University name after F.Skorina</li>
                            <li>Software developer</li>
                        </ul>
                    </div>
                    <div class="order-3" v-else>
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Образование</p>
                        <ul class="my-3 text-sm">
                            <li>2016-2021</li>
                            <li>Гомельский университет имени Ф.Скорина</li>
                            <li>Инженер программист</li>
                        </ul>
                    </div>
                    <Skills
                        :skills="skills"
                        :language="language"
                    />
                    <div class="order-2" v-if="language === 'en'">
                        <p class="pb-2 text-xl font-bold uppercase border-b-2">Languages</p>
                        <ul class="my-3 text-sm">
                            <li>English (A2)</li>
                            <li>Russian (Native)</li>
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
        <div class="p-10">
            <ProfileText
                :language="language"
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