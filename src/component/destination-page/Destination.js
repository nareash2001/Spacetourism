import React, { useState } from 'react'
import Header from '../header/Header'
import "./destination.css";
import data from '../../data.json';
const Destination = () => {
  const [des, setDes] = useState(0);
  const [active, setActive] = useState([
    { act: true, },
    { act: false },
    { act: false },
    { act: false }
  ]);
  const Handler = (i) => {
    setDes(i);
    const arr = active;
    for (let j = 0; j < arr.length; j++) {
      arr[j].act = false;
      if (i == j) {
        arr[j].act = true;
      }
    }
    setActive(arr);
  }
  return (
    <div className="destination-container">
      <Header />
      <div className='content'>
        <h3 className='subtitle'><span>01</span> PICK YOUR DESTINATION</h3>
        <div className="content-2">
          <div className='destination-left'>
            <img src={data.destinations[des].images.png} />
          </div>
          <div className="destination-right">
            <ul>
              <li className={active[0].act === true ? "active" : ""} onClick={() => Handler(0)}>MOON</li>
              <li className={active[1].act === true ? "active" : ""} onClick={() => Handler(1)}>MARS</li>
              <li className={active[2].act === true ? "active" : ""} onClick={() => Handler(2)}>EUROPA</li>
              <li className={active[3].act === true ? "active" : ""} onClick={() => setDes(3)}>TITAN</li>
            </ul>
            <h3>{data.destinations[des].name}</h3>
            <p>{data.destinations[des].description}</p>
            <div className='destination-line'></div>
            <div className='des-right-bottom'>
              <div className='des-right-left'>
                <p>AVG. DISTANCE</p>
                <h5>{data.destinations[des].distance}</h5>
              </div>
              <div className='des-right-right'>
                <p>EST. TRAVEL TIME</p>
                <h5>{data.destinations[des].travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
