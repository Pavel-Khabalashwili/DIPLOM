let center = [56.346869078913514,37.51901263558194];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 18,
	});

    let placemark = new ymaps.Placemark(center, {
		balloonContent: `
			<div class="balloon">
				<div class="balloon__address">ЦМИТ ГЕНЕЗИС</div>
				<div class="balloon__contacts">
					<a href="tel:+79252054247">+7(925)205-42-47</a>
				</div>
			</div>
		`
	}, {
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

