const Rides = ({ rides }) => {

    const list = rides.map(ride => 
        <li key={ride.id}><Ride ride={ride} /></li>
    );

    return (
        <ul>
            {list}
        </ul>
    );
}

const Ride = ({ride}) => {
    return (
        //ul, li
        <div>
            <p>Ride id: {ride.id}</p>
            <p>Origin Station: {ride.origin_station_code}</p>
            <p>station_path: {ride.destination_station_code}</p>
            <p>Date: {ride.date}</p>
            <p>Distance: </p>
        </div>
    );
}

export default Rides;