const RideType = ({ onClick }) => {
    return (
        <div>
            <button onClick={() => onClick('nearest')}>Nearest Rides</button>
            <button onClick={() => onClick('upcoming')}>Upcoming Rides</button>
            <button onClick={() => onClick('past')}>Past Rides</button>
        </div>
    );
}

export default RideType;

// TODO: add event listeners