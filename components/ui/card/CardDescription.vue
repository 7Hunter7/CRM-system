<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p
    :class="cn('text-sm text-muted-foreground my-0 mx-auto px-3', props.class)"
  >
    <slot />
  </p>
</template>
