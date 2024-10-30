<script setup>
    import MainImage from '@/components/MainImage.vue'
    import BaseInfo from "@/components/BaseInfo.vue";
    import ProfileText from "@/components/ProfileText.vue";
    import WorkExperience from "@/components/WorkExperience.vue";
</script>

<template>
    <div class="flex font-sans max-lg:flex-col-reverse">
        <div class="flex justify-center p-10 bg-zinc-700">
            <div class="text-white">
                <MainImage />
                <div class="max-lg:grid max-lg:grid-cols-2 max-lg:gap-12 max-sm:grid-cols-1">
                    <BaseInfo />
                </div>
            </div>
        </div>
        <div class="p-10">
            <ProfileText />
            <WorkExperience />
        </div>
    </div>
</template>