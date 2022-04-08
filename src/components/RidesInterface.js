import { useEffect, useState } from 'react'
import RideType from './RideType'
import Rides from './Rides'
import Filter from './Filter'

const URL = '';

const RidesInterface = () => {
    //TODO: Define state
    const [rides, setRides] = useState([
        {
            id: 1,
            origin_station_code: 23,
            station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
            destination_station_code: 93,
            date: 1644924365,
            map_url: "url",
            state: "Maharashtra",
            city: "Panvel"
          },
    ]);

    // TODO: update data on changing ride category
    // const [ride_category, setRide_category] = useState('nearest');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resp = await fetch(URL);
    //         const upd_rides = await resp.json();

    //         setRides(upd_rides);
    //         // setRide_category
    //     };

    //     fetchData();
    // }
    // , []);

    const handleFilterUpdate = () => {

    }

    const handleRideCategoryUpdate = () => {

    }

    return (
        <div>
            <nav>
                <RideType rides={rides} onClick={handleRideCategoryUpdate}/>
                <Filter rides={rides} onClick={handleFilterUpdate}/>
            </nav>
            <Rides rides={rides}/>
        </div>
    );
}

export default RidesInterface;