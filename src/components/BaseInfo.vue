<script setup>
defineProps({
    contactsInfo: Array,
    language: String
});
</script>

<template>
    <div class="order-4">
        <p class="mt-5 pb-2 text-xl font-bold uppercase border-b-2 max-lg:mt-0" v-if="language === 'en'">Contact</p>
        <p class="mt-5 pb-2 text-xl font-bold uppercase border-b-2 max-lg:mt-0" v-else>Контакты</p>
        <ul class="text-sm my-3" v-for="contact in contactsInfo">
            <li>
                <a href=""><span v-html="contact.ico"></span> {{ contact.text }}</a>
            </li>
        </ul>
    </div>
</template>