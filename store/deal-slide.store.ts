import { defineStore } from "pinia";
import type { ICard } from "@/components/kanban/kanban.types";

// Состояние по умолчанию
const defaultValue: { card: ICard | null; isOpen: boolean } = {
  card: null, // Карточка по умолчанию
  isOpen: false, // По умолчанию слайдер закрыт
};

/* ---------- Хранилище состояния Slider  ---------- */
export const useDealsSlideStore = defineStore("deal-slide", {
  state: () => defaultValue,

  actions: {
    // Сброс состояния
    clear() {
      this.$patch(defaultValue);
    },

    // Установка состояния слайдера
    set(card: ICard) {
      this.$patch({ card, isOpen: true });
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
