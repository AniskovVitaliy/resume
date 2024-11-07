<script setup>
defineProps({
    workExperiences: Object,
    language: String
});
</script>

<template>

    <div class="pl-5 mb-10" v-for="workExperienceInfo in workExperiences[language]">
        <p class="flex justify-between"><span class="font-bold text-lg">{{ workExperienceInfo.place }}</span><span>{{ workExperienceInfo.date }}</span></p>
        <p class="italic">{{ workExperienceInfo.role }}</p>
        <p v-if="language === 'en'" class="mt-2 font-bold">Technologies:</p>
        <p v-else class="mt-2 font-bold">Технологии:</p>
        <ul class="mb-2 list-disc list-inside">
            <li v-for="technology in workExperienceInfo.technologies"><span v-html="technology"></span></li>
        </ul>
        <p v-if="language === 'en'" class="mt-2 font-bold">Responsibilities:</p>
        <p v-else class="mt-2 font-bold">Обязанности:</p>
        <ul class="mb-2 list-disc list-inside">
            <li v-for="responsibility in workExperienceInfo.responsibilities"><span v-html="responsibility"></span></li>
        </ul>
    </div>

    <div class="pl-5" v-if="language === 'en'">
        <p class="flex justify-between">
            <span class="font-bold text-lg">Homselmash (Homel, Belarus)</span><span>2011 - 2020</span>
        </p>
        <ul class="italic">
            <li>Foreman / CNC Machine Adjuster "MAZAK QTN 250""</li>
        </ul>
        <ul class="my-2 list-disc list-inside">
            <li>
                <span>Foreman (2019-2020):</span> working with documentation, managing personnel, overseeing production processes
            </li>
            <li>
                <span>CNC Machine Adjuster (2011-2019):</span> setting up machining centers for part fabrication, writing programs, quality control of finished products
            </li>
        </ul>
    </div>

    <div class="pl-5" v-else>
        <p class="flex justify-between">
            <span class="font-bold text-lg">Гомсельмаш (Гомель, Беларусь)</span><span>2011 - 2020</span>
        </p>
        <ul class="italic">
            <li>Мастер участка / Наладчик станков с программным управлением "MAZAK QTN 250"</li>
        </ul>
        <ul class="my-2 list-disc list-inside">
            <li>
                <span>Мастер участка (2019-2020):</span> работа с документацией, управление персоналом, контроль производственного процесса.
            </li>
            <li>
                <span>Наладчик ЧПУ станков (2011-2019):</span> настройка обрабатывающего центра для производства деталей, написание программ, контроль качества готовой продукции.
            </li>
        </ul>
    </div>

</template>