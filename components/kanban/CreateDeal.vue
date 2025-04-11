<template>
  <div class="text-center mb-2">
    <button
      class="transition-all opacity-10 hover:opacity-100 hover:text-[#a252c8]"
      @click="isOpenForm = !isOpenForm"
    >
      <Icon
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="25px"
      />
      <Icon
        v-else
        name="radix-icons:plus-circled"
        class="fade-in-100 fade-out-0"
        size="25px"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuidv4 } from "uuid";
import { COLLECTION_DEALS, DB_ID } from "@/app.constants";
import type { IDeal } from "@/types/deals.types";

const isOpenForm = ref<boolean>(false); // Состояние открытия формы
</script>
