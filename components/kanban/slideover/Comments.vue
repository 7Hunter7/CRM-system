<template>
  <UiInput
    placeholder="Оставьте комментарий"
    v-model="commentRef"
    @keyup.enter="writeComment()"
  ></UiInput>
  <UiSkeleton v-if="isLoading" class="w-full h-[76px] rounted mt-5" />
  <div v-else-if="card">
    <div
      v-for="comment in card?.comments"
      :key="comment.$id"
      class="flex items-start mt-5"
    >
      <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="20" />
      <div class="border-border bg-black/20 rounded p-3 w-full">
        <div class="mb-2 text-sm">
          Клмментарий
          {{ dayjs(comment.$createdAt).format("HH:mm, DD MMMM YYYY") }}
        </div>
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { IDeal } from "@/types/deals.types";
import { useCommentsByDeal } from "./useCommentsByDeal";
import { useCreateComment } from "./useCreateComment";

const { data, refetch, isLoading } = useCommentsByDeal();
const { commentRef, writeComment } = useCreateComment(refetch);

const card = data as unknown as IDeal; // Типизация для AppWrite
</script>
