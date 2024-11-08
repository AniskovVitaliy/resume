<script setup>
defineProps({
    workExperiences: Object,
    language: String
});
</script>

<template>

    <div class="pl-5 mb-10 max-md:mb-5" v-for="workExperienceInfo in workExperiences[language]">
        <p class="flex justify-between max-md:flex-col">
            <span class="font-bold text-lg max-md:text-base">{{ workExperienceInfo.place }}</span>
            <span class="max-md:text-sm">{{ workExperienceInfo.date }}</span>
        </p>
        <p class="italic max-md:text-sm">{{ workExperienceInfo.role }}</p>
        <p v-if="language === 'en'" class="mt-2 font-bold max-md:text-sm">Technologies:</p>
        <p v-else class="mt-2 font-bold max-md:text-sm">Технологии:</p>
        <ul class="mb-2 list-disc list-inside max-md:text-sm">
            <li v-for="technology in workExperienceInfo.technologies"><span v-html="technology"></span></li>
        </ul>
        <p v-if="language === 'en'" class="mt-2 font-bold max-md:text-sm">Responsibilities:</p>
        <p v-else class="mt-2 font-bold max-md:text-sm">Обязанности:</p>
        <ul class="mb-2 list-disc list-inside max-md:text-sm">
            <li v-for="responsibility in workExperienceInfo.responsibilities"><span v-html="responsibility"></span></li>
        </ul>
    </div>

    <div class="pl-5" v-if="language === 'en'">
        <p class="flex justify-between max-md:flex-col">
            <span class="font-bold text-lg max-md:text-base">Homselmash (Homel, Belarus)</span><span>2011 - 2020</span>
        </p>
        <ul class="italic max-md:text-sm">
            <li>Foreman / CNC Machine Adjuster "MAZAK QTN 250""</li>
        </ul>
        <ul class="my-2 list-disc list-inside max-md:text-sm">
            <li>
                <span>Foreman (2019-2020):</span> working with documentation, managing personnel, overseeing production processes
            </li>
            <li>
                <span>CNC Machine Adjuster (2011-2019):</span> setting up machining centers for part fabrication, writing programs, quality control of finished products
            </li>
        </ul>
    </div>

    <div class="pl-5" v-else>
        <p class="flex justify-between max-md:flex-col">
            <span class="font-bold text-lg max-md:text-base">Гомсельмаш (Гомель, Беларусь)</span>
            <span class="max-md:text-sm">2011 - 2020</span>
        </p>
        <ul class="italic max-md:text-sm">
            <li>Мастер участка / Наладчик станков с программным управлением "MAZAK QTN 250"</li>
        </ul>
        <ul class="my-2 list-disc list-inside max-md:text-sm">
            <li>
                <span>Мастер участка (2019-2020):</span> работа с документацией, управление персоналом, контроль производственного процесса.
            </li>
            <li>
                <span>Наладчик ЧПУ станков (2011-2019):</span> настройка обрабатывающего центра для производства деталей, написание программ, контроль качества готовой продукции.
            </li>
        </ul>
    </div>

</template>