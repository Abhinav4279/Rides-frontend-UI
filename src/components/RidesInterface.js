import { useEffect, useState } from 'react'
import RideType from './RideType'
import Rides from './Rides'
import Filter from './Filter'

const URL = 'https://assessment.api.vweb.app/rides';
const MX = 1e9 + 7;

const RidesInterface = ({ user }) => {
    //TODO: Define state
    const [glob, setGlob] = useState('');
    const [rides, setRides] = useState([...glob]);

    const [user_origin, setUserOrigin] = useState(user.station_code);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(URL);
            const upd_rides = await resp.json();

            setGlob(upd_rides);
            setRides(upd_rides);
            setUserOrigin(user.station_code);
        };

        fetchData();
    }
    , []);

    const sortNearest = (rides, origin) => {
        let upd_rides = [...glob];

        upd_rides.sort((a, b) => {
            let a_dist = a.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);
            let b_dist = b.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), MX);

            return a_dist - b_dist;
        });

        upd_rides = upd_rides.filter(ride => (ride.city === city || city === '') && (ride.state === state || state === ''));

        console.log(upd_rides.length);
        return upd_rides;
    }

    
    const handleStateClick = (state_in) => {
        setState(state_in);
    }

    const handleCityClick = (city_in) => {
        setCity(city_in);
    }

    const getDate = (date) => {
        let d = new Date(date);

        return d;
    }

    const handleRideCategoryUpdate = (type, origin = user_origin) => {
        if(type === 'nearest') {
            let upd_rides = sortNearest(glob, origin);
            setRides(upd_rides);
        } 
        else if(type === 'upcoming') {
            console.log(Date.now());
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