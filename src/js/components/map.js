ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    center: [59.94, 30.32],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });
}
