import { useState } from 'react'
import './Filter.css'

//state(pradesh) and city filter
const Filter = ({ onCityClick, onStateClick }) => {
    //Making use of controlled components
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
        onCityClick(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
        onStateClick(e.target.value);
    }

    return (

        <div>
            <span>Filters: </span>
            <input type='text' value={city} placeholder="City: Click ride-type after input" onChange={(e) => handleCityChange(e)}/>
            <input type='text' value={state} placeholder="State: Click ride-type after input" onChange={(e) => handleStateChange(e)}/>
        </div>
    );
}

export default Filter;