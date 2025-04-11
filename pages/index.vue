<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <UiCard class="mb-3" draggable="true">
      <UiCardHeader role="button"> Card name </UiCardHeader>
      <UiCardContent> Компания </UiCardContent>
      <UiCardFooter> Date </UiCardFooter>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import type { ICard, IColumn } from "@/components/kanban/kanban.types";
import { useKanbanQuery } from "@/components/kanban/useKanbanQuery";

useHead({
  title: "CRM System | Home",
  meta: [
    {
      name: "description",
      content: "Home page for CRM System",
    },
  ],
});

const dragCardRef = ref<ICard | null>(null); // Карточка draggable
const sourceColumnRef = ref<IColumn | null>(null); // Исходная колонка

const { data, isLoading, refetch } = useKanbanQuery(); // Запрос на получение данных Kanban
</script>

<style scoped lang="scss"></style>
