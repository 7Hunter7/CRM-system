<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <div>
            <KanbanCreateDeal :refetch="refetch" :status="column.id" />
            <UiCard
              v-for="card in column.items"
              :key="card.id"
              class="mb-5"
              draggable="true"
            >
              <UiCardHeader role="button">
                <UiCardTitle>{{ card.name }}</UiCardTitle>
                <UiCardDescription>
                  {{ convertCurrency(card.price) }}
                </UiCardDescription>
              </UiCardHeader>
              <UiCardContent> Компания {{ card.companyName }} </UiCardContent>
              <UiCardFooter>
                {{ dayjs(card.$createdAt).format("DD MMMM YYYY") }}
              </UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard, IColumn } from "@/components/kanban/kanban.types";
import { useKanbanQuery } from "@/components/kanban/useKanbanQuery";
import { convertCurrency } from "@/utils/convertCurrency";
import { useMutation } from "@tanstack/vue-query";
import dayjs from "dayjs"; // Импорт dayjs для форматирования даты
import { DB_ID, COLLECTION_DEALS } from "@/app.constants";

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

// Запрос на получение данных Kanban
const { data, isLoading, refetch } = useKanbanQuery();

// Переменная для хранения карточки, которую мы перетаскиваем
type TypeMutationVariables = {
  docId: string;
  status?: string;
};

// Запрос на изменение данных Kanban
const { mutate } = useMutation({
  mutationKey: ["move card"],

  mutationFn: ({ docId, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
      status,
    }),
  onSuccess: () => {
    refetch(); // Обновляем данные после успешного изменения
  },
});
</script>

<style scoped lang="scss"></style>
