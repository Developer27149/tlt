<template>
  <div class="p-4 m-4 flex gap-4" text="2xl red-700">
    <div>home page</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "My home page",
});

useHead({
  title: "My home page xxx",
});

useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
