// This file is responsible for rendering the map using Folium, Leaflet, or MapLibre and managing the display of train lines and stations.

const mapContainer = document.getElementById('map');
const travelsDataUrl = '/data/travels.json';
let map;

// Initialize the map
function initMap() {
    map = L.map(mapContainer).setView([51.505, -0.09], 6); // Default view set to London
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    loadTravelsData();
}

// Load travels data from JSON file
function loadTravelsData() {
    fetch(travelsDataUrl)
        .then(response => response.json())
        .then(data => {
            data.travels.forEach(travel => {
                const { lat, lon, type } = travel;
                L.marker([lat, lon]).addTo(map)
                    .bindPopup(`Type: ${type}`)
                    .openPopup();
            });
        })
        .catch(error => console.error('Error loading travels data:', error));
}

// Function to add a new travel entry
function addTravel(lat, lon, type) {
    const travel = { lat, lon, type };
    fetch(travelsDataUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travel)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Travel added:', data);
        loadTravelsData(); // Reload travels data to update the map
    })
    .catch(error => console.error('Error adding travel:', error));
}

// Event listener for map clicks to add travels
map.on('click', function(e) {
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;
    const type = prompt("Enter the type of train you saw (e.g., 'Freight', 'Passenger'):");
    if (type) {
        addTravel(lat, lon, type);
    }
});

// Initialize the map on page load
document.addEventListener('DOMContentLoaded', initMap);