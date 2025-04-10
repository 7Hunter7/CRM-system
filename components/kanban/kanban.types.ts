import type { EnumStatus } from "@/types/deals.types";

// Интерфейс для карточки Kanban
export interface ICard {
  id: string;
  name: string;
  price: number;
  $createdAt: string;
  companyName: string;
  status: string;
}

// Интерфейс для колонок Kanban
export interface IColumn {
  id: EnumStatus;
  name: string;
  items: ICard[];
}
