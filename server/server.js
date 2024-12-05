const express = require('express');
require('dotenv').config();
const api_key = process.env.API_KEY;
const timeapi_key = process.env.TIME_KEY;
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');  // Use node-fetch instead of fetch-node

app.use(cors());
app.use(express.json());

app.get("/api/timenode", async function (req, res) {
  try {
    const { q, lat, long } = req.query;  // Extract query parameters
    const lUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=1&appid=${api_key}`;
    const lresponse = await fetch(lUrl);
    const ldata = await lresponse.json();

    const apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeapi_key}&format=xml&by=position&lat=${lat}&lng=${long}`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const wresponse = await fetch(weatherUrl);
    const wdata = await wresponse.json();

    res.json({ ldata, data, wdata });  // Fix sending JSON data
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
