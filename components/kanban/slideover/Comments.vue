<template>
  <UiInput
    placeholder="Оставьте комментарий"
    v-model="commentRef"
    @keyup.enter="writeComment()"
  ></UiInput>
</template>

<script setup lang="ts">
import type { IDeal } from "@/types/deals.types";
import { useCommentsByDeal } from "./useCommentsByDeal";
import { useCreateComment } from "./useCreateComment";

const { data, refetch, isLoading } = useCommentsByDeal();
const { commentRef, writeComment } = useCreateComment(refetch);

const card = data as unknown as IDeal; // Типизация для AppWrite
</script>
