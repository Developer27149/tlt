<template>
  <div>
    <header flex gap="2" p="10" text="blue-300">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind.css";
</script>
