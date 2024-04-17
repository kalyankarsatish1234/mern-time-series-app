
import './App.css';

import { useEffect, useState } from 'react';
import services from "./Service/services";


function App() {

  const [data, setData] = useState([{ts:"", machine_status: 0, vibration: 343}]);
  const SERIES_WIDTH = 840;

  const COLOR_MAP = {
    0: 'yellow',
    1: 'green',
    2: 'red'
  }

  const fetchData = () => {
      services.getData()
        .then((result) => {
          setData([...result.data]);
          console.log("success"+ result);
        })
        .catch((err) => {
          console.log(err);
        })

  }

  useEffect(() => {
    fetchData();
  }, [])

  const HOUR = 30;
  return (


    <div>
      <div style={{ display: 'grid', placeItems: 'center', width: '100vw', height: '100vh', alignContent: 'center' }}>
        <div style={{ position: 'relative', height: '100px', background: 'red', width: SERIES_WIDTH, display: 'flex', borderBottom: '2px solid black' }}>
          {data.map(item => <div key={item.ts} style={{ height: '100%', background: COLOR_MAP[item.machine_status], width: SERIES_WIDTH / (HOUR) }} />)}
          <div style={{ position: 'absolute', bottom: -30, left: -20 }}>{new Date(data[0].ts).toLocaleTimeString()}</div>
          <div style={{ position: 'absolute', bottom: -30, right: -20 }}>{new Date(data[data.length - 1].ts).toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
