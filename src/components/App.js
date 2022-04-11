import Header from './Header';
import RidesInterface from './RidesInterface'
import { useState, useEffect } from "react";
const URL = 'https://assessment.api.vweb.app/user';


function App() {
  const [user, setUser] = useState('loading');

  //user fetching with error handling
  useEffect(() => {
      const fetchData = async () => {
          try {
            const resp = await fetch(URL);
            const data = await resp.json();
            
            setUser(data);
          } catch {
            setUser('failed');
          }
      };

      fetchData();
  }
  , []);

    //return based upon stage of fetching
    if(user === 'loading') {
      return 'Loading...';
    } else if(user === 'failed') {
      return 'Failed, please refresh';
    } else {
      return (
        <div>
          <Header user={user}/>
          <RidesInterface user={user}/>
        </div>
      )
    }
}

export default App;
