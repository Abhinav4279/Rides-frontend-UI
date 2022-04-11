import { useEffect, useState } from 'react'
import RideType from './RideType'
import Rides from './Rides'
import Filter from './Filter'
import './RidesInterface.css'

const URL = 'https://assessment.api.vweb.app/rides';
const MX = 1e9 + 7;

const RidesInterface = ({ user }) => {
    //Global state to pull results from
    const [glob, setGlob] = useState('');
    //Rides for current ride category which is passed as prop to RideType.js
    const [rides, setRides] = useState([...glob]);

    const user_origin = user.station_code;
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    //Data Fetching and error handling
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(URL);
                const upd_rides = await resp.json();
    
                setGlob(upd_rides);
                setRides(upd_rides);
            } catch {
                setGlob('err');
            }
        };

        fetchData();
    }
    , []);

    //Sort based on distance
    const sortNearest = (rides, origin) => {
        let upd_rides = [...glob];

        //distance is calculated by taking minimum over distance from each station in station_path of ride from user-origin
        upd_rides.sort((a, b) => {
            let a_dist = a.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);
            let b_dist = b.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);

            return a_dist - b_dist;
        });

        upd_rides = upd_rides.filter(ride => (ride.city === city || city === '') && (ride.state === state || state === ''));

        return upd_rides;
    }

    //updating state(pradesh) based on filter input
    const handleStateChange = (state_in) => {
        setState(state_in);
    }

    //updating city based on filter input
    const handleCityChange = (city_in) => {
        setCity(city_in);
    }

    const getDate = (date) => {
        let d = new Date(date);

        return d;
    }

    //handler function passed as prop to RideType component for handling change in ride-type/category
    const handleRideCategoryUpdate = (type, origin = user_origin) => {
        if(type === 'nearest') {
            let upd_rides = sortNearest(glob, origin);
            setRides(upd_rides);
        } 
        else if(type === 'upcoming') {
            let upd_rides = glob.filter(ride => getDate(ride.date) > Date.now());
            upd_rides = upd_rides.filter(ride => (ride.city === city || city === '') && (ride.state === state || state === ''));
   
            setRides(upd_rides);
        } 
        else if(type === 'past'){
            let upd_rides = glob.filter(ride => getDate(ride.date) <= Date.now());
            upd_rides = upd_rides.filter(ride => (ride.city === city || city === '') && (ride.state === state || state === ''));
            
            setRides(upd_rides);
        }
    }

    // conditional redering based upon api response
    if(glob === 'err')
        return 'Error while loading rides, please refresh.'
    else 
        return (
            <div>
                <nav>
                    <RideType rides={rides} onClick={handleRideCategoryUpdate}/>
                    <Filter rides={rides} onCityClick={handleCityChange} onStateClick={handleStateChange}/>
                </nav>
                <Rides rides={rides} origin={user_origin}/>
            </div>
        );
}

export default RidesInterface;