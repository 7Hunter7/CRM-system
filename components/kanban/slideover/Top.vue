<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase bold text-xl mb-4">О сделке</div>
    <KanbanSlideoverLabel label-text="Наименование">
      <h2>
        {{ card?.name }}
      </h2>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Сумма">
      {{ convertCurrency(card?.price || 0) }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Статус">
      <UiBadge variant="outline">
        {{ card?.status }}
      </UiBadge>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Клиент">
      {{ card?.companyName }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Дата создания">
      {{ dayjs(card?.$createdAt).format("DD MMMM YYYY") }}
    </KanbanSlideoverLabel>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
import { useDealsSlideStore } from "@/store/deal-slide.store";
import { convertCurrency } from "@/utils/convertCurrency";

const store = useDealsSlideStore();
const { card } = storeToRefs(store);
</script>

<script setup lang="ts"></script>
