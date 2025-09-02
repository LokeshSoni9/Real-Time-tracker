const socket = io();

const map = L.map("map").setView([0, 0], 2); // Default view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'lokesh soni'
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 16); // Center map at your location
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const markers = {};

socket.on("recieve-location", (data) => {
    const { id, latitude, longitude } = data;
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});