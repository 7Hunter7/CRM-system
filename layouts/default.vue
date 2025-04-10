<template>
  <LayoutLoader v-if="isLoadingStore.isLoading" />
  <section v-else :class="{ grid: authStore.isAuth }">
    <LayoutSidebar v-if="authStore.isAuth" />
    <slot />
  </section>
</template>

<script setup lang="ts">
import { account } from "@/utils/appwrite";
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    const user = await account.get();
    console.log("User in response(onMounted):", user);
    if (user) {
      // Сохраняем пользователя в store
      authStore.setUser({
        name: user.name,
        email: user.email,
        status: user.status ? user.status : true,
      });
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
.grid {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
