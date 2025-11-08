// main.js
document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('map');
    const traveledLines = [];
    const traveledStations = [];

    const map = L.map(mapContainer).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    function loadTravelData() {
        fetch('/api/travels')
            .then(response => response.json())
            .then(data => {
                data.lines.forEach(line => {
                    L.polyline(line.coordinates, { color: 'blue' }).addTo(map);
                });
                data.stations.forEach(station => {
                    L.marker([station.lat, station.lon]).addTo(map)
                        .bindPopup(station.name);
                });
            });
    }

    function saveTravelData() {
        const travelData = {
            lines: traveledLines,
            stations: traveledStations
        };
        fetch('/api/travels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travelData)
        });
    }

    map.on('click', function(e) {
        const lat = e.latlng.lat;
        const lon = e.latlng.lng;
        const stationName = prompt("Enter station name:");

        if (stationName) {
            traveledStations.push({ name: stationName, lat: lat, lon: lon });
            L.marker([lat, lon]).addTo(map)
                .bindPopup(stationName);
            saveTravelData();
        }
    });

    loadTravelData();
});