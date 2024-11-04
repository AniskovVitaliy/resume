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
        <p class="my-2">{{ workExperienceInfo.description }}</p>
        <p v-if="language === 'en'" class="font-bold">Technologies:</p>
        <p v-else class="font-bold">Технологии:</p>
        <ul class="mb-2 list-disc list-inside">
            <li v-for="technology in workExperienceInfo.technologies">{{ technology }}</li>
        </ul>
        <p v-if="language === 'en'" class="font-bold">Responsibilities:</p>
        <p v-else class="font-bold">Обязанности:</p>
        <ul class="mb-2 list-disc list-inside">
            <li v-for="responsibility in workExperienceInfo.responsibilities">{{ responsibility }}</li>
        </ul>
    </div>

    <div class="pl-5 mb-3" v-if="language === 'en'">
        <p class="flex justify-between">
            <span class="font-bold text-lg">Homselmash. Homel. Belarusian</span><span>2011 - 2020</span>
        </p>
        <ul class="italic">
            <li>- Foreman</li>
            <li>- Programmable machine operation "MAZAK QTN 250"</li>
        </ul>
        <ul class="my-2">
            <li><span>Foreman (2019-2020)</span> - Work with documents, production control, production
                process management, etc.
            </li>
            <li><span>Programmable machine operation (2011-2019)</span> - Setting up a machining turning
                center to produce the necessary parts. Control of manufactured parts.
            </li>
        </ul>
    </div>

    <div class="pl-5 mb-3" v-else>
        <p class="flex justify-between">
            <span class="font-bold text-lg">Гомсельмаш. Гомель. Беларусь</span><span>2011 - 2020</span>
        </p>
        <ul class="italic">
            <li>- Мастер</li>
            <li>- Наладчик станков с программным управлением "MAZAK QTN 250"</li>
        </ul>
        <ul class="my-2">
            <li><span>Мастер (2019-2020)</span> - Работа с документами, управление людьми, контроль производственного процесса, и т.д.
            </li>
            <li><span>Наладчик станков с программным управлением (2011-2019)</span> - Настройка обрабатывающего центра для изготовления необходимых деталей. Контроль изготовленных деталей.
            </li>
        </ul>
    </div>

</template>