import React, { useEffect, useState } from 'react';

function TimeAPI({ long, lat,SetTime }) {
    const [timeData, setTimeData] = useState(null);
    const [error, setError] = useState(null);
    const[time,settime]=useState(null);
    const fetchTime = async () => {
       
        const url='/api/server/server.js'

        try {console.log("Hello harsh")
            const res = await fetch(url);
            console.log("Hello harsh")
            if (res) {
                console.log("Respond got")
            }
            else{console.log("Responfd not got during ai fetch")}
            const tdata= await res.data;
            const text = await tdata.text(); // Get response as text
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "text/xml"); // Parse XML

            // Extract values from the XML
            const formattedTime = xmlDoc.getElementsByTagName("formatted")[0].textContent;
            const zoneName = xmlDoc.getElementsByTagName("zoneName")[0].textContent;

            // Set the time data in state
            setTimeData({ formattedTime, zoneName });
            SetTime({formattedTime})
        } catch (error) {
            console.error("Error fetching time:", error);
            setError("Failed to fetch time data. Please try again.");
        }
        if(time){
            console.log("Time got in timeapi");
        }
        else{console.log("Time not got in timeapi");}
    };

    useEffect(() => {
        if (lat && long) {
            fetchTime();
        }
        else{console.log("Longitude and latitude is not in timeapi")}
    }, [lat, long]); // Fetch new time when lat or long changes

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {timeData ? (
                <div>
                    <h2>Current Time in {timeData.zoneName}:</h2>
                    <p>{timeData.formattedTime}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TimeAPI;
