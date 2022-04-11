import './RideType.css'
import { useState } from 'react'

const RideType = ({ onClick}) => {
    const [active, setActive] = useState(0);

    return (
        <div>
            <button className={(active === 0)? "active": null} onClick={() => {onClick('nearest'); setActive(0);}}>Nearest Rides</button>
            <button className={(active === 1)? "active": null} onClick={() => {onClick('upcoming'); setActive(1);}}>Upcoming Rides</button>
            <button className={(active === 2)? "active": null} onClick={() => {onClick('past'); setActive(2);}}>Past Rides</button>
        </div>
    );
}

export default RideType;

// TODO: add event listeners