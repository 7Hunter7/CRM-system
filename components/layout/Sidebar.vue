<template>
  <aside class="relative px-5 py-8 bg-sidebar h-full w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg
        src="/logo.svg"
        alt="Logo"
        width="100px"
        height="auto"
        class="mx-auto"
      />
    </NuxtLink>
    <button
      class="absolute top-2 right-3 transition-colors hover:text-primary"
      @click="logout"
    >
      <Icon name="line-md:logout" size="20px" />
    </button>
    <LayoutMenu />
  </aside>
</template>

<script setup lang="ts">
import { account } from "@/utils/appwrite";
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";
import { useRouter } from "vue-router";

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

// Функция выхода из аккаунта
const logout = async () => {
  isLoadingStore.set(true);
  try {
    await account.deleteSession("current"); // Удаляем текущую сессию
    authStore.clear(); // Очищаем данные пользователя из store
    await router.push("/login");
  } catch (error) {
    console.error("Error logout:", error);
  } finally {
    isLoadingStore.set(false);
  }
};
</script>

<style scoped></style>
