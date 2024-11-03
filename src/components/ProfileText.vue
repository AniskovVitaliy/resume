<script setup>
defineProps({
    language: String
});
</script>

<template>
    <template v-if="language === 'en'">
        <div class="h-[200px]">
            <h1 class="mb-3 text-6xl font-bold">Vitaliy Aniskov</h1>
            <h3 class="text-3xl">PHP developer</h3>
        </div>
        <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2">Profile</h2>
        <p>
            I'm a developer with over two years of experience in commercial development. In general I work as full
            stack developer:
        </p>
        <ul>
            <li>Backend: native php, opencart, bitrix (a little), laravel (a little).</li>
            <li>Frontend: Js, Jquery, CSS, HTML, SCSS.</li>
        </ul>
        <p class="mb-3">
            I'm constantly developing and striving for high-quality,
            extensible
            and understandable code.
        </p>
    </template>
    <template v-else>
        <div class="h-[200px]">
            <h1 class="mb-3 text-6xl font-bold">Аниськов Виталий</h1>
            <h3 class="text-3xl">PHP разработчик</h3>
        </div>
        <h2 class="pb-2 mt-3 mb-3 border-black text-3xl font-bold uppercase border-b-2">Обо мне</h2>
        <p>
            Я разработчик с более чем трехлетним стажем в коммерческой разработке. В основном я работаю как full-stack
            разработчик:
        </p>
        <ul>
            <li>Backend: native php, opencart, bitrix (a little), laravel (a little).</li>
            <li>Frontend: Js, Jquery, CSS, HTML, SCSS.</li>
        </ul>
        <p class="mb-3">
            Я постоянно развиваюсь и стремлюсь к качественному, расширяемому и понятному коду.
        </p>
    </template>
</template>