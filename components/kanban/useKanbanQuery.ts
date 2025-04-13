import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "@/app.constants";
import { KANBAN_DATA } from "./kanban.data";
import type { IColumn, ICard } from "./kanban.types";

export function useKanbanQuery() {
  // Используем useQuery для получения данных из базы данных
  return useQuery({
    queryKey: ["deals"], // Ключ запроса
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS), // Функция для получения данных

    // Функция для обработки данных после их получения
    select(data) {
      // Создаем новый массив колонок с пустыми массивами для сделок
      const newBoard: IColumn[] = KANBAN_DATA.map((column) => ({
        ...column,
        items: [], // Инициализируем пустой массив для сделок
      }));

      const deals = data.documents as unknown as ICard[];

      console.log("deals: ", deals);
      console.log("newBoard: ", newBoard);

      // Перебираем сделки и добавляем их в соответствующие колонки
      for (const deal of deals) {
        const column = newBoard.find((col) => col.id === deal.status);
        if (column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: column.name,
          });
        }
      }

      return newBoard;
    },
  });
}
