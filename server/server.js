const express=require('express');
require('dotenv').config;
const api_key=process.env.API_KEY;
const timeapi_key=process.env.TIME_KEY;
const app=express();
const cors=require('cors')
const fetch =require('fetch-node')
// app.use(express.static(path.join(__dirname,'public')))
app.use(cors());
app.use(express.json());
app.get("/api/timenode", async function(req,res){
   try { const inputval=req.query;
    // const lUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputval}&limit=1&appid=40f4f989dc2ca4888010ed73d0c78e8a`;
    const lUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputval}&limit=1&appid=${api_key}`;
    const lresponse=await fetch(lUrl);
    const ldata=await lresponse.json();

    // const { lat, long } = req.query;
    const apiUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeapi_key}&format=xml&by=position&lat=${lat}&lng=${long}`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;
    const response= await fetch(apiUrl);
    const data= await response.json();
    

    const wresponse=await fetch(weatherUrl);
    const wdata=await wresponse.json();

    res.send(json({ldata,data, wdata}))
}
catch(error){
    console.log(error)
    res.status(500).send('Error fetching data')
}
    
})

app.listen(5000,()=>{
    console.log("Serever is running")
})