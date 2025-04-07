<template>
  <aside class="px-5 py-8 bg-sidebar h-full w-full reletive">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg
        src="/logo.svg"
        alt="Logo"
        width="100px"
        height="auto"
        class="mx-auto"
      />
    </NuxtLink>
    <UiButton class="mb-5" variant="primary" size="lg" to="/">Главная</UiButton>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
