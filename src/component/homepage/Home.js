import React from 'react'
import Header from '../header/Header';
import "./home.css";
const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-content'>
        <div className='home-content-left'>
          <h5>SO,YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let's face it; if you want to go space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <div className='home-content-right'>
          <div className='home-content-right-explore'>
            <h3>EXPLORE</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
