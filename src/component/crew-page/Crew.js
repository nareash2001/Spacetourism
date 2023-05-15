import React, { useState } from 'react'
import Header from '../header/Header'
import "./crew.css"
import data from '../../data.json';

const Crew = () => {
  const [crew, setCrew] = useState(0);
  const [active1, setActive1] = useState([
    { act: true, },
    { act: false },
    { act: false },
    { act: false }
  ]);
  const Handler = (i) => {
    setCrew(i);
    const arr = active1;
    for (let j = 0; j < arr.length; j++) {
      arr[j].act = false;
      if (i == j) {
        arr[j].act = true;
      }
    }
    console.log(arr);
    setActive1(arr);
  }
  return (
    <div className='crew-container'>
      <Header />
      <div className="content" id='content1'>
        <h3 className='subtitle'><span>02</span>MEET YOUR CREW</h3>
        <div className='content-2'>
          <div className='content-left'>
            <h2>{data.crew[crew].role}</h2>
            <h1>{data.crew[crew].name}</h1>
            <p>{data.crew[crew].bio}</p>
            <div className='content2-left-bottom'>
              <div className={active1[0].act === true ? "activecircle" : "crew-circle"} onClick={() => Handler(0)}></div>
              <div className={active1[1].act === true ? "activecircle" : "crew-circle"} onClick={() => Handler(1)}></div>
              <div className={active1[2].act === true ? "activecircle" : "crew-circle"} onClick={() => Handler(2)}></div>
              <div className={active1[3].act === true ? "activecircle" : "crew-circle"} onClick={() => Handler(3)}></div>
            </div>
          </div>
          <div className='content-right'>
            <img src={data.crew[crew].images.png} draggable={false}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Crew
