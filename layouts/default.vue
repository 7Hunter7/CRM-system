<template>
  <section class="default-layout">
    <aside>Sidebar</aside>
    <slot />
  </section>
</template>

<script setup lang="ts">
console.log("Loaded"); // Компонент создан и загружен
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
