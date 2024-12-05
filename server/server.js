const express = require('express');
require('dotenv').config();  // Correct way to load environment variables
const api_key = process.env.API_KEY;
const timeapi_key = process.env.TIME_KEY;
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');  // Use node-fetch for HTTP requests

app.use(cors());
app.use(express.json());

// API route
app.get("/api/timenode", async (req, res) => {
  try {
    // Extract query parameters
    const { q, lat, long } = req.query;
    if (!lat || !long) {
      return res.status(400).send('Latitude and longitude are required');
    }

    // OpenWeatherMap API URL for geolocation
    const lUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=1&appid=${api_key}`;
    const lresponse = await fetch(lUrl);
    const ldata = await lresponse.json();

    // Check if geolocation was found
    if (!ldata || ldata.length === 0) {
      return res.status(404).send('Location not found');
    }

    // TimeZoneDB API URL for timezone data
    const apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeapi_key}&format=xml&by=position&lat=${lat}&lng=${long}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // OpenWeatherMap API URL for weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;
    const wresponse = await fetch(weatherUrl);
    const wdata = await wresponse.json();

    // Send combined response
    res.json({ ldata, data, wdata });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
