import { useEffect, useState } from 'react'
import RideType from './RideType'
import Rides from './Rides'
import Filter from './Filter'

const URL = '';
const MX = 1e9 + 7;

const glob =  [{
    id: 1,
    origin_station_code: 23,
    station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
    destination_station_code: 93,
    date: 1644924365,
    map_url: "url",
    state: "Maharashtra",
    city: "Panvel"
  },
  {
    id: 2,
    origin_station_code: 24,
    station_path: [23, 40, 45, 48, 56, 60, 77, 81, 93],
    destination_station_code: 93,
    date: 1644924365,
    map_url: "url",
    state: "Maharashtra",
    city: "Pune"
  }
]

const RidesInterface = () => {
    //TODO: Define state
    const [rides, setRides] = useState([...glob]);

    const [user_origin, setUserOrigin] = useState(40);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    //SOLN: Fetch data of rides and keep in global state for a particular session

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
        let upd_rides = [...rides];
        upd_rides.sort((a, b) => {
            let a_dist = a.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);
            let b_dist = b.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);

            return a_dist - b_dist;
        });

        upd_rides = upd_rides.filter(ride => (ride.city === city || ride.city === '') && (ride.state === state || ride.state === ''));

        return upd_rides;
    }

    
    const handleStateClick = (state_in) => {
        setState(state_in);
        // const tar = e.target.value;
        // const upd_rides = rides.filter(ride => (ride.state === tar));
        // setRides(upd_rides);
    }

    //rectify to include filter 
    const handleCityClick = (city_in) => {
        setCity(city_in);
        // const tar = e.target.value;
        // const upd_rides = rides.filter(ride => (ride.city === tar));
        // setRides(upd_rides);
    }

    const handleRideCategoryUpdate = (type, origin = user_origin) => {
        // console.log(glob.length);
        // console.log(rides.length);
        if(type === 'nearest') {
            let upd_rides = sortNearest(glob, origin);
            setRides(upd_rides);
        } else if(type === 'upcoming') {
            let upd_rides = glob.filter(ride => ride.date > Date.now());
            upd_rides = upd_rides.filter(ride => (ride.city === city || ride.city === '') && (ride.state === state || ride.state === ''));
   
            setRides(upd_rides);
        } else if(type === 'past'){
            // console.log(city);
            let upd_rides = glob.filter(ride => ride.date <= Date.now());
            upd_rides = upd_rides.filter(ride => (ride.city == city || city == '') && (ride.state == state || state == ''));
            
            setRides(upd_rides);
        }
    }

    return (
        <div>
            <nav>
                <RideType rides={rides} onClick={handleRideCategoryUpdate}/>
                <Filter rides={rides} onCityClick={handleCityClick} onStateClick={handleStateClick}/>
            </nav>
            <Rides rides={rides} origin={user_origin}/>
        </div>
    );
}

export default RidesInterface;