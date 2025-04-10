<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <UiCard class="mb-3" draggable="true">
      <UiCardHeader role="button"> Card name </UiCardHeader>
      <UiCardContent> Компания </UiCardContent>
      <UiCardFooter> Date </UiCardFooter>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "CRM System | Home",
  meta: [
    {
      name: "description",
      content: "Home page for CRM System",
    },
  ],
});
</script>

<style scoped lang="scss"></style>
