import React, { useEffect } from 'react';

function Long_lat_api({ inputval, Setlat, Setlong }) {
    const fetchCoordinates = async () => {
        try {
            

            const url=`/api/server/server.js?q=${inputval}`
            const res = await fetch(url);
            const Data = await res.json();
            const data= await Data.ldata;

            if (data && data.length > 0) {
                Setlat(data[0].lat);
                Setlong(data[0].lon);
            } else {
                console.log("No data found for the entered location.");
            }
        } catch (error) {
            console.log("Longitude and latitude not fetched", error);
        }
    };

    useEffect(() => {
        if (inputval) {
            fetchCoordinates();
        }
    }, [inputval]);

    return null; // No UI needed here as it's only fetching data
}

export default Long_lat_api;
