import './App.css';
import Header from './components/Header';
import RidesInterface from './components/RidesInterface'
import { useState, useEffect } from "react";
const URL = 'https://assessment.api.vweb.app/user';


function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          const resp = await fetch(URL);
          const data = await resp.json();

          setUser(data);
      };

      fetchData();
  }
  , []);

  return (
    <div>
      <Header user={user}/>
      <RidesInterface user={user}/>
    </div>
  );
}

export default App;
