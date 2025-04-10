<template>
  <section class="default-layout">
    <LayoutSidebar />
    <slot />
  </section>
</template>

<script setup lang="ts">
import { account } from "@/utils/appwrite";
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";
import { useRouter } from "vue-router";

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    const user = await account.get();
    if (user) {
      // Сохраняем пользователя в store
      authStore.setUser(user);
    } else {
      router.push("/login");
    }
  } catch (error) {
    router.push("/login");
    console.error("Error onmounted layout:", error);
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
