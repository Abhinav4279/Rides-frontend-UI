import { useEffect, useState } from 'react'
import RideType from './RideType'
import Rides from './Rides'
import Filter from './Filter'

const URL = '';
const MX = 1e9 + 7;

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

    const [user_origin, setUserOrigin] = useState(40);

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

    const sortNearest = (rides, origin) => {
        const upd_rides = [...rides];
        upd_rides.sort((a, b) => {
            let a_dist = a.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);
            let b_dist = b.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);

            return a_dist < b_dist;
        });

        return upd_rides;
    }

    const handleStateFilter = (e) => {
        const tar = e.target.value;
        const upd_rides = rides.filter(ride => (ride.state === tar));
        setRides(upd_rides);
    }

    const handleCityFilter = (e) => {
        const tar = e.target.value;
        const upd_rides = rides.filter(ride => (ride.city === tar));
        setRides(upd_rides);
    }

    const handleRideCategoryUpdate = (type, origin = user_origin) => {
        if(type == 'nearest') {
            const upd_rides = sortNearest(rides, origin);
            setRides(upd_rides);
        } else if(type == 'upcoming') {
            const upd_rides = rides.filter(ride => ride.date > Date.now());
            setRides(upd_rides);
        } else if(type == 'past'){
            const upd_rides = rides.filter(ride => ride.date <= Date.now());
            setRides(upd_rides);
        }
    }

    return (
        <div>
            <nav>
                <RideType rides={rides} onClick={handleRideCategoryUpdate}/>
                <Filter rides={rides} onCityClick={handleCityFilter} onStateClick={handleStateFilter}/>
            </nav>
            <Rides rides={rides} origin={user_origin}/>
        </div>
    );
}

export default RidesInterface;