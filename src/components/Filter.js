import { useState } from 'react'

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
        onStateClick(state);
    }

    return (

        <div>
            <input type='text' value={city} onChange={(e) => handleCityChange(e)}/>
            <input type='text' value={state} onChange={(e) => handleStateChange(e)}/>
        </div>
    );
}

export default Filter;