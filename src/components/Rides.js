const Rides = ({ rides, origin }) => {

    const list = rides.map(ride => 
        <li key={Math.random()*ride.id}><Ride ride={ride} origin={origin}/></li>
    );

    return (
        <ul>
            {list}
        </ul>
    );
}

const Ride = ({ ride, origin }) => {
    let d = new Date(ride.date);

    return (
        //ul, li
        <div>
            <p>Ride id: {ride.id}</p>
            <p>Origin Station: {ride.origin_station_code}</p>
            <p>station_path: {ride.destination_station_code}</p>
            <p>Distance: {ride.station_path.reduce((prev, curr) => Math.min(Math.abs(origin - curr), prev), 1e9)}</p>
            {/* <p>station_path: {ride.city}</p> */}
        </div>
    );
}

export default Rides;