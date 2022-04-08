import { useEffect, useState } from 'react'

const URL = '';

const RidesInterface = () => {
    //TODO: Define state
    const [rides, setRides] = useState([]);

    // TODO: update data on changing ride category
    // const [ride_category, setRide_category] = useState('nearest');

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(URL);
            const upd_rides = await resp.json();

            setRides(upd_rides);
            // setRide_category
        };

        fetchData();
    }
    , []);

    const handleFilterUpdate = () => {

    }

    const handleRideCategoryUpdate = () => {

    }

    return (
        <div>
            <RideType rides={rides} onClick={handleRideCategoryUpdate}/>
            <Rides rides={rides} onClick={handleFilterUpdate}/>
        </div>
    );
}