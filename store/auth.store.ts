import { set } from "@vueuse/core";
import { defineStore } from "pinia";

// Интерфейс авторизации
interface IAuthStore {
  name: string;
  email: string;
  status: boolean; // Авторизован ли пользователь
}

// Состояние по умолчанию
const defaultValue: { user: IAuthStore } = {
  user: {
    name: "",
    email: "",
    status: false,
  },
};

/* ---------- Хранилище авторизации ---------- */
export const useAuthStore = defineStore("auth", {
  state: () => defaultValue,

  getters: {
    // Проверка авторизации
    isAuth: (state) => state.user.status,
  },

  actions: {
    // Сброс состояния
    clear() {
      this.$patch(defaultValue);
    },

    // Установка пользователя
    setUser(input: IAuthStore) {
      this.$patch({ user: input });
    },
  },
});

/* ---------- Хранилище загрузки ---------- */
export const useIsLoadingStore = defineStore("isLoading", {
  state: () => ({
    isLoading: true,
  }),

  actions: {
    // Установка состояния загрузки
    set(data: boolean) {
      this.$patch({ isLoading: data });
    },
  },
});
