<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-border',
        }"
      >
        <template #header>
          <KanbanSlideoverTop />
        </template>
        <KanbanSledeoverComments />
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDealsSlideStore } from "@/store/deal-slide.store";

const store = useDealsSlideStore();

// Состояние открытия слайдера
const isLocalOpen = computed({
  get: () => store.isOpen,
  set: (value) => {
    store.isOpen = value;
  },
});
</script>
