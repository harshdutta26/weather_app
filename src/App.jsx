import React, { useState } from 'react';
import './App.css';
import Input from './assets/components/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Weather_Api from './assets/components/Weather_Api';
import Long_lat_api from './assets/components/long_lat_api';
import TimeAPI from './assets/components/timeapi';
import Flip from './assets/components/Flip';

function App() {
    const [inputval, SetInputval] = useState("");
    const [lat, Setlat] = useState(null);
    const [long, Setlong] = useState(null);
    const [temp_max, Settemp_max] = useState(null);
const[time,SetTime]=useState(null);
if(time){
    console.log("Got time in app ");
}
else{console.log("Time not get in app")}
    return (
        <>
        <div className='mt-24'>
            <div className='mt-0 border-4 border-blue-600 p-0 rounded'>
                <div className='flex h-200 mt-0 backdrop-blur p-0'>
                    <div className='text-5xl ml-auto mt-20 font-extrabold'>
                       <Flip/>
                    </div>
                    <div className='flex ml-80'>
                        <div className='mt-80 mb-5 text-5xl'>
                          <p className='font-bold'> {temp_max} &deg;C</p> 
                        </div>
                        <div className='mt-80'>
                            <p className='text-2xl p-2'>{inputval}</p>
                            <p>{time}</p>
                        </div>

                    </div>
                    <div className=' ml-auto w-72'>
                        <div className='flex justify-between'>
                            <Input SetInputval={SetInputval} />
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
                        </div>

                        {/* Fetch longitude and latitude */}
                        <Long_lat_api inputval={inputval} Setlat={Setlat} Setlong={Setlong} />

                        {/* Display weather data based on coordinates */}
                        <Weather_Api long={long} lat={lat} Settemp_max={Settemp_max} />

                        {/* Display time based on the input value */}
                        <TimeAPI long={long} lat={lat} SetTime={SetTime} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
