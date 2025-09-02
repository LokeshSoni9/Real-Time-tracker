# Real-Time Device Tracker

A Node.js application for real-time location tracking using Socket.IO, Express, Leaflet.js, and EJS.  
Users can share their live location and view others on an interactive map.

## Features

- Real-time location sharing using Socket.IO
- Interactive map powered by Leaflet.js
- Multiple users' locations shown with markers
- Responsive design

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- Leaflet.js
- EJS (Embedded JavaScript templates)
- CSS

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/LokeshSoni9/Real-Time-tracker.git
   cd Real-Time-tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the server:**
   ```sh
   node app.js
   ```
   Or for auto-reload during development:
   ```sh
   npx nodemon app.js
   ```

4. **Open in browser:**
   ```
   http://localhost:2000
   ```

## Folder Structure

```
Real-Time-tracker/
├── app.js
├── package.json
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   └── index.ejs
```

## How It Works

- When a user opens the app, their location is fetched using the browser's geolocation API.
- The location is sent to the server via Socket.IO.
- The server broadcasts all users' locations to connected clients.
- Leaflet.js displays all users as markers on the map.

## License

MIT

---

**Note:**  
- For accurate location, use a device with GPS (like a mobile phone).
- Allow location access when
