import { useState } from 'react'
import './Filter.css'

const Filter = ({ onCityClick, onStateClick }) => {
    //Making use of controlled components
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    //Some error
    const handleCityChange = (e) => {
        setCity(e.target.value);
        // console.log(city);
        onCityClick(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
        onStateClick(e.target.value);
    }

    return (

        <div>
            <span>Filters: </span>
            <input type='text' value={city} placeholder="Click ride-type after input" onChange={(e) => handleCityChange(e)}/>
            <input type='text' value={state} placeholder="Click ride-type after input" onChange={(e) => handleStateChange(e)}/>
        </div>
    );
}

export default Filter;