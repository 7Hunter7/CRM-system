<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl text-center mb-10">Наши клиенты</h1>
    <div v-if="isLoading">Loading...</div>

    <UiTable v-else>
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead class="w-[80px]">Изображение</UiTableHead>
          <UiTableHead class="w-[200px]">Наименование</UiTableHead>
          <UiTableHead class="w-[200px]">Email</UiTableHead>
          <UiTableHead>Откуда пришел</UiTableHead>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody>
        <UiTableRow v-for="customer in customers" :key="customer.$id">
        </UiTableRow>
        <UiTableCell> </UiTableCell>
      </UiTableBody>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_COMMENTS } from "~/app.constants";
import type { ICustomer } from "@/types/deals.types";

useHead({
  title: "CRM System | Customers",
  meta: [
    {
      name: "description",
      content: "Customers page for CRM System",
    },
  ],
});

const { data, isLoading } = useQuery({
  queryKey: ["customers"],
  queryFn: () => {
    DB.listDocuments(DB_ID, COLLECTION_COMMENTS);
  },
});

const customers = data?.value?.documents as unknown as ICustomer[];
</script>
