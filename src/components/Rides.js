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
            <p>Ride id:</p>
            <p>Origin Station: </p>
            <p>station_path: </p>
            <p>Date:</p>
            <p>Distance: </p>
        </div>
    );
}

export default Rides;