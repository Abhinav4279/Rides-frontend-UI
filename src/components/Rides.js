import mp from '../map.png';
import './Rides.css'

//Container for rides
const Rides = ({ rides, origin }) => {

    const list = rides.map(ride => 
        <li key={Math.random()*ride.id}><Ride ride={ride} origin={origin}/></li>
    );

    return (
        <ul style={{listStyleType: "none"}}>
            {list}
        </ul>
    );
}

//Ride card
const Ride = ({ ride, origin }) => {
    return (
        <div className='card'>
            <img src={mp} alt="map"/>
            <div>
                <p>Ride id: {ride.id}</p>
                <p>Origin Station: {ride.origin_station_code}</p>
                <p>station_path: [{ride.station_path.map((stn) => `${stn}, `)}]</p>
                <p>Date: {ride.date.toString()}</p>
                <p>Distance: {ride.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), 1e9)}</p>
            </div>
            <div className="loc">
                <span>{ride.city}</span>
                <span>{ride.state}</span>
            </div>
        </div>
    );
}

export default Rides;