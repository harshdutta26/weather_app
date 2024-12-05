import React, { useEffect, useState } from 'react';
import { CloudIcon, SunIcon } from '@heroicons/react/24/solid';
import WaterDropletIcon from './WaterDropletIcon';
import WindSpeed from './WindSpeed';
import Visibility from './Visibility';
import Feelslike from './Feelslike';

function Weather_Api({ long, lat, Settemp_max, SetCloud, SetRain, SetClearsky, SetVisibility, SetHr, SetMm, SetSc }) {
    const [tempMax, setTempMax] = useState(null);
    const [tempMin, setTempMin] = useState(null);
    const [temp, setTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [feels_like, setFeelsLike] = useState(null);
    const [wind, setWind] = useState(null);
    const [clouds, setClouds] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [weatherDesc, setWeatherDesc] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    const fetchWeatherData = async () => {
        if (!lat || !long) return;

        try {
            // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=40f4f989dc2ca4888010ed73d0c78e8a&units=metric`;
            const url='/api/server/server.js'
            const response = await fetch(url);
            const w_data = await response.json();
            const data=w_data.wdata;

            setVisibility(data.visibility);
            setWind(data.wind.speed);
            setClouds(data.clouds.all);
            setWeatherDesc(data.weather[0].description);

            if (data.main) {
                setTempMax(data.main.temp_max);
                setTempMin(data.main.temp_min);
                setTemp(data.main.temp);
                setHumidity(data.main.humidity);
                setFeelsLike(data.main.feels_like);
                Settemp_max(data.main.temp);
            } else {
                console.log("No main data found in response.");
            }

            // Extracting and formatting the time
            const date = new Date(data.dt * 1000); // Convert UNIX timestamp to milliseconds
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            const formattedTime = date.toLocaleString('en-IN', options);
            setCurrentTime(formattedTime);

            // Set hour, minute, and second in the parent component
            SetHr(date.getHours());
            SetMm(date.getMinutes());
            SetSc(date.getSeconds());

        } catch (error) {
            console.log("Error fetching weather data", error);
        }

        if (clouds) {
            console.log("Clouds got in weather api");
            SetCloud(clouds);
        } else {
            console.log("No Clouds in weather api");
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, [lat, long]);

    return (
        <div>
            {tempMax && tempMin && temp ? (
                <div className='w-94'>
                    <p className='mr-auto p-2'>Weather Details...</p>
                    <div className='text-2xl mt-2 flex flex-col items-center space-x-2 '>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Temp:</p>
                            <p className='ml-2'>{temp} °C</p>
                            <SunIcon className="h-6 w-6 text-yellow-400 mr-2" />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Humidity:</p>
                            <p className='ml-2'>{humidity}</p>
                            <WaterDropletIcon />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Feels like:</p>
                            <p className='ml-2'>{feels_like}</p>
                            <Feelslike />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Wind speed:</p>
                            <p className='ml-2'>{wind}</p>
                            <WindSpeed />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Clouds:</p>
                            <p className='ml-2'>{clouds}</p>
                            <CloudIcon className="h-6 w-6 text-blue-500 border border-blue-500" />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Visibility:</p>
                            <p className='ml-2'>{visibility}</p>
                            <Visibility />
                        </div>
                        <div className='flex items-center p-2'>
                            <p className='font-bold'>Current Time:</p>
                            <p className='ml-2'>{currentTime}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Weather_Api;

// import React, { useEffect, useState } from 'react';
// import { CloudIcon,SunIcon} from '@heroicons/react/24/solid'
// import WaterDropletIcon from './WaterDropletIcon';
// import WindSpeed from './WindSpeed';
// import Visibility from './Visibility';
// import Feelslike from './Feelslike';



// function Weather_Api({ long, lat ,Settemp_max, SetCloud, SetRain, SetClearsky, SetVisibility}) {
//     const [tempMax, setTempMax] = useState(null);
//     const [tempMin, setTempMin] = useState(null);
//     const [temp, setTemp] = useState(null);
//     const[humidity,sethumidity]=useState(null);
//     const[feels_like,setfeels_like]=useState(null);
//     const[wind,setwind]=useState(null);
//     const[clouds,setclouds]=useState(null);
//     const[time,settime]=useState(null);
//     const[visibility,setvisibility]=useState(null);
//     const[rain,setRain]=useState(" ");
//     const [weatherDesc, setWeatherDesc] = useState(null);
//     const fetchWeatherData = async () => {
//         if (!lat || !long) return;

//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=40f4f989dc2ca4888010ed73d0c78e8a&units=metric`;
//             const response = await fetch(url);
//             const data = await response.json();

//             const weather_desc=data.weather[0].description;
          
//             setvisibility(data.visibility)
//             SetVisibility(data.visibility)
//             settime(data.timezone);
//             setwind(data.wind.speed);
//             setclouds(data.clouds.all);
            
//             if (data.main) {
//                 setTempMax(data.main.temp_max);
//                 setTempMin(data.main.temp_min);
//                 setTemp(data.main.temp);
//                 sethumidity(data.main.humidity);
//                 setfeels_like(data.main.feels_like);
//                 Settemp_max(data.main.temp);
//             } else {
//                 console.log("No main data found in response.");
//             }
//         } catch (error) {
//             console.log("Error fetching weather data", error);
//         }

//         if(clouds){
//             console.log("Clouds got in weather api")
//             SetCloud(clouds);
//         }
//         else{console.log("No Clouds in weather api")}
//     };

//     useEffect(() => {
//         fetchWeatherData();
//     }, [lat, long]);

//     return (
//         <div>
//             {tempMax && tempMin && temp ? (
//                 <div className='w-94'>
//                 <p className='mr-auto p-2'>Weather Details...</p>
//                 <div className='text-2xl mt-2 flex flex-col items-center space-x-2 '>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Temp:</p>
//                         <p className='ml-2'>{temp} °C</p>
//                         <SunIcon className="h-6 w-6 text-yellow-400 mr-2" />
//                     </div>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Humidity:</p>
//                         <p className='ml-2'>{humidity}</p>
//                         <WaterDropletIcon/>
//                     </div>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Feels like:</p>
//                         <p className='ml-2'>{feels_like}</p>
//                         <Feelslike/>
//                     </div>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Wind speed:</p>
//                         <p className='ml-2'>{wind}</p>
//                         <WindSpeed/>
//                     </div>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Clouds:</p>
//                         <p className='ml-2'>{clouds}</p>
//                         <CloudIcon className="h-6 w-6 text-blue-500 border border-blue-500" />
//                     </div>
//                     <div className='flex items-center p-2'>
//                         <p className='font-bold'>Visibility:</p>
//                         <p className='ml-2'>{visibility}</p>
//                         <Visibility/>
//                     </div>

//                 </div>
//             </div>
            
//             ) : (
//                 <p>Loading weather data...</p>
//             )}
//         </div>
//     );
// }

// export default Weather_Api;
