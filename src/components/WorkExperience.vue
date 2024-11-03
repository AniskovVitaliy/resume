<script setup>
defineProps({
    workExperiences: Object,
    language: String
});
</script>

<template>
    <div class="pl-5 mb-3" v-for="workExperienceInfo in workExperiences[language]">
        <p>{{ workExperienceInfo.date }}</p>
        <p>{{ workExperienceInfo.place }}</p>
        <p>{{ workExperienceInfo.role }}</p>
        <p>{{ workExperienceInfo.description }}</p>
        <p v-if="language === 'en'">Technologies:</p>
        <p v-else>Технологии:</p>
        <ul class="list-disc list-inside" v-for="technology in workExperienceInfo.technologies">
            <li>{{ technology }}</li>
        </ul>
        <p v-if="language === 'en'">Responsibilities:</p>
        <p v-else>Обязанности:</p>
        <ul class="list-disc list-inside" v-for="responsibility in workExperienceInfo.responsibilities">
            <li>{{ responsibility }}</li>
        </ul>
    </div>

    <div class="pl-5 mb-3" v-if="language === 'en'">
        <p>2011 - 2020</p>
        <p>Homselmash. Homel. Belarusian</p>
        <ul>
            <li>- Foreman</li>
            <li>- Programmable machine operation "MAZAK QTN 250"</li>
        </ul>
        <ul>
            <li><span>Foreman (2019-2020)</span> - Work with documents, production control, production
                process management, etc.
            </li>
            <li><span>Programmable machine operation (2011-2019)</span> - Setting up a machining turning
                center to produce the necessary parts. Control of manufactured parts.
            </li>
        </ul>
    </div>

    <div class="pl-5 mb-3" v-else>
        <p>2011 - 2020</p>
        <p>Гомсельмаш. Гомель. Беларусь</p>
        <ul>
            <li>- Мастер</li>
            <li>- Наладчик станков с программным управлением "MAZAK QTN 250"</li>
        </ul>
        <ul>
            <li><span>Мастер (2019-2020)</span> - Работа с документами, управление людьми, контроль производственного процесса, и т.д.
            </li>
            <li><span>Наладчик станков с программным управлением (2011-2019)</span> - Настройка обрабатывающего центра для изготовления необходимых деталей. Контроль изготовленных деталей.
            </li>
        </ul>
    </div>

</template>