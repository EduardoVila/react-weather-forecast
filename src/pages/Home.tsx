import React from 'react';
import { FiChevronRight, FiSun } from 'react-icons/fi'

import '../styles/pages/home.css'

function Home() {
  return (
    <div id="page-home">
      <div className="content-wrapper">

        <aside className="sidebar">
          <h1>
            Cities Weather <br/> 
            Forecast
          </h1>

          <div className="search-container">
            <h2>Search a city:</h2>
            <input type="text" name="city" id="city" placeholder="Ex: Araranguá, SC, Brazil..."/>
            <button>Search</button>
          </div>

          <div className="latest-searches-container">
            <h2>Latest searches:</h2>

            <div className="search">
              <p>Araranguá, SC, Brazil</p>

              <FiChevronRight size={30} color="#2C2C2C"/>
            </div>
          </div>
        </aside>

        <main>
          <img src="https://pix10.agoda.net/geo/city/17164/1_17164_02.jpg?s=1920x822" alt=""/>
          <div className="content">
            <FiSun size={150} color="#FFFFFF"/>
            <p>32º</p>
            <span>Sunny  |  Clear</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;