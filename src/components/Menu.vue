<script setup>
const emit = defineEmits(['updateLanguage'])
function setLanguage(language) {
    emit('updateLanguage', language)
}

function downloadFile(url, fileName) {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
</script>

<template>
    <div data-dial-init class="fixed z-10 end-6 bottom-6 group">
        <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-2">

            <button @click="downloadFile('./aniskov-vitaliy_en.pdf', 'aniskov-vitaliy-resume-en.pdf')" type="button"
                    data-tooltip-target="tooltip-download-en" data-tooltip-placement="left"
                    class="flex justify-center items-center w-[56px] h-[56px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="pl-1">EN</span>
                <span class="sr-only">Download english cv</span>
            </button>
            <div id="tooltip-download-en" role="tooltip"
                 class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Download english cv
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button @click="downloadFile('./aniskov-vitaliy_ru.pdf', 'aniskov-vitaliy-resume-ru.pdf')" type="button"
                    data-tooltip-target="tooltip-download-ru" data-tooltip-placement="left"
                    class="flex justify-center items-center w-[56px] h-[56px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="pl-1">RU</span>
                <span class="sr-only">Download russian cv</span>
            </button>
            <div id="tooltip-download-ru" role="tooltip"
                 class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Download russian cv
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button @click="setLanguage('en')" type="button" data-tooltip-target="tooltip-language-en"
                    data-tooltip-placement="left"
                    class="flex justify-center items-center w-[56px] h-[56px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <span>EN</span>
                <span class="sr-only">English language</span>
            </button>
            <div id="tooltip-language-en" role="tooltip"
                 class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                English language
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button @click="setLanguage('ru')" type="button" data-tooltip-target="tooltip-language-ru"
                    data-tooltip-placement="left"
                    class="flex justify-center items-center w-[56px] h-[56px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <span>RU</span>
                <span class="sr-only">Russian language</span>
            </button>
            <div id="tooltip-language-ru" role="tooltip"
                 class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Russian language
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

        </div>
        <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default"
                aria-expanded="false"
                class="flex items-center justify-center text-white bg-zinc-700 rounded-lg border border-gray-200 w-14 h-14 hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 1v16M1 9h16"/>
            </svg>
            <span class="sr-only">Open actions menu</span>
        </button>
    </div>
</template>