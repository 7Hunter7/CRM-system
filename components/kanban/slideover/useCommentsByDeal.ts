import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS } from "@/app.constants";
import { useDealsSlideStore } from "@/store/deal-slide.store";

// Функция для получения комментариев по сделке
export function useCommentsByDeal() {
  const store = useDealsSlideStore();
  const cardId = store.card?.id || ""; // Получаем id карточки из состояния слайдера

  // Используем useQuery для получения данных о карточке(сделке и ее комментариях)
  return useQuery({
    queryKey: ["deal", cardId],
    queryFn: () => {
      DB.getDocument(DB_ID, COLLECTION_DEALS, cardId as string);
    },
  });
}
