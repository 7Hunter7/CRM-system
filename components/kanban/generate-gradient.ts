// Функция для генерации градиента для колонок канбана
export const generateColumnGradient = (index: number, total = 1) => {
  // Интенсивность градиента от 100 до 50
  const intensity = 100 - (index / (total - 1)) * 50;
  // Шаг градиента
  const step = (30 - 5) / (total - 1);
  // Прозрачность градиента
  const opacity = 5 + step * index;
  // Оттенок, насыщенность и яркость
  return {
    backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)`,
  };
};
