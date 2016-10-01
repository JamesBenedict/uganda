var map = L.map('map').setView([-0.322536, 32.309890], 9)
				L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				}).addTo(map);

				L.marker([-0.322536, 32.309890]).addTo(map)
					.bindPopup("Fisherman Paul Kiberiu's landing site").openPopup();
					var popup = L.popup();

				function onMapClick(e) {
					popup
						.setLatLng(e.latlng)
						.setContent("You clicked the map at " + e.latlng.toString())
						.openOn(map);
				}

				map.on('click', onMapClick);