// Функция для конвертации числа в валюту
export const convertCurrency = (amount: string | number) => {
  // Форматирование для России
  return new Intl.NumberFormat("ru-RU", {
    style: "currency", // Стиль - валюта
    currency: "RUB", // Валюта - рубль
  }).format(+amount); // Преобразование строки в число
};
