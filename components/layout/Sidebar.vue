<template>
  <aside class="relative px-5 py-8 bg-sidebar h-full w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg
        src="/logo.svg"
        alt="Logo"
        width="100px"
        height="auto"
        class="mx-auto"
      />
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20px" />
    </button>
    <UiButton class="mb-5" var="primary" size="lg" to="/">Главная</UiButton>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
