<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput class="mb-3" type="text" placeholder="Name" v-model="name" />
        <UiInput
          class="mb-3"
          type="email"
          placeholder="Email"
          v-model="email"
        />
        <UiInput
          class="mb-3"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button" @click="login"> Login </UiButton>
          <UiButton type="button" variant="secondary" @click="register">
            Register
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIsLoadingStore } from "@/store/auth.store";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid"; // uuid для генерации уникальных идентификаторов

useHead({
  title: "CRM System | Login",
  meta: [
    {
      name: "description",
      content: "Login page for the application",
    },
  ],
});

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

// Функция для обработки входа в систему
const login = async () => {
  isLoadingStore.set(true);
  try {
    await account.createEmailSession(email.value, password.value);
    // Получаем информацию о пользователе после успешного входа
    const response = await account.get();
    if (response) {
      authStore.setUser({
        name: response.name,
        email: response.email,
        status: response.status,
      });
    }
    // Сброс полей ввода после успешного входа
    name.value = "";
    email.value = "";
    password.value = "";

    await router.push("/");
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    isLoadingStore.set(false);
  }
};

// Функция для обработки регистрации
const register = async () => {
  try {
    // Cоздаем нового пользователя
    await account.create(uuidv4(), email.value, password.value, name.value);
    // Создаем сессию для нового пользователя
    await login();
  } catch (error) {
    console.error("Registration error:", error);
  }
};
</script>

<style scoped lang="scss"></style>
