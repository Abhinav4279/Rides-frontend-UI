const Rides = ({ rides }) => {
    return (
        rides.forEach(element => {
            <Ride data={element}/>
        });
    );
}

export default Rides;