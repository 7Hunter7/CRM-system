import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "@/app.constants";
import { KANBAN_DATA } from "./kanban.data";
import type { ICard } from "./kanban.types";

export function useKanbanQuery() {
  // Используем useQuery для получения данных из базы данных
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),

    select(data) {
      const newBoard = [...KANBAN_DATA];
      const deals = data.documents as unknown as ICard[];

      console.log("deals: ", deals);
      console.log("newBoard: ", newBoard);
    },
  });
}
