// Интерфейсы для работы с сделками

// Интерфейс базовых полей
export interface IBaseField {
  $createdAt: string;
  $id: string;
}

// Интерфейс клиента
export interface ICustomer extends IBaseField {
  name: string;
  email: string;
  avatar_url: string;
  from_source?: string;
}

// Интерфейс комментария к сделке
export interface IComment extends IBaseField {
  text: string;
}

// Интерфейс для работы с сделками (статусы)
export enum EnumStatus {
  "todo" = "todo",
  "to-be-agreed" = "to-be-agreed",
  "in-progress" = "in-progress",
  "produced" = "produced",
  "done" = "done",
}

// Интерфейс для работы с сделками
export interface IDeal extends IBaseField {
  comments: IComment[];
  customer: ICustomer;
  name: string;
  price: number;
  status: EnumStatus;
}
// Сделка - это объект, который содержит информацию о сделке, включая комментарии, клиента и статус
