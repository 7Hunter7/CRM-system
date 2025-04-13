import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { DB_ID, COLLECTION_COMMENTS } from "@/app.constants";
import { useDealsSlideStore } from "@/store/deal-slide.store";

// Функция для создания коментария к сделке
export function useCreateComment({ refetch }: { refetch: () => void }) {
  const store = useDealsSlideStore();
  const commentRef = ref<string>(""); // Ссылка на текст комментария

  const { mutate } = useMutation({
    mutationKey: ["add comments", commentRef.value],
    mutationFn: () =>
      DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
        text: commentRef.value,
        deal: store.card?.id,
      }),

    onSuccess: () => {
      refetch(); // Обновляем данные после добавления комментария
      commentRef.value = ""; // Очищаем поле комментария
    },
  });

  // Функция для добавления комментария
  const writeComment = () => {
    if (!commentRef.value) return;
    mutate(); // Вызываем мутацию для добавления комментария
  };

  return { writeComment, commentRef };
}
