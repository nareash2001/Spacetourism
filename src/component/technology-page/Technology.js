import React, { useState } from 'react'
import Header from '../header/Header'
import "./technology.css";
import data from '../../data.json';
const Technology = () => {
  const [tech, setTech] = useState(0);
  const [active2, setActive2] = useState([
    { act: true, },
    { act: false },
    { act: false }
  ]);
  const Handler = (i) => {
    setTech(i);
    const arr = active2;
    for (let j = 0; j < arr.length; j++) {
      arr[j].act = false;
      if (i === j) {
        arr[j].act = true;
      }
    }
    console.log(arr);
    setActive2(arr);
  }
  return (
    <div className="technology-container">
      <Header />
      <div className="content" id="tech-content" >
        <h3 className='subtitle'><span>03</span>SPACE LAUNCH 101</h3>
        <div className='content-2' id="content-2">
          <div className='tech-content-left'>
            <div className='tech-content-left-left'>
              <div className={active2[0].act === true ? "active1circle" : ""} id="tech-circle" onClick={() => Handler(0)}>1</div>
              <div className={active2[1].act === true ? "active1circle" : ""} id="tech-circle" onClick={() => Handler(1)}>2</div>
              <div className={active2[2].act === true ? "active1circle" : ""} id="tech-circle" onClick={() => Handler(2)}>3</div>
            </div>
            <div className='tech-content-left-right'>
              <h5>THE TERMINOLOGY...</h5>
              <h1>{data.technology[tech].name}</h1>
              <p>{data.technology[tech].description}</p>
            </div>
          </div>
          <div className='tech-content-right'>
            <img src={data.technology[tech].images.portrait} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
