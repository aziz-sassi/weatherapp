import { useState } from 'react';
import './index.css'; 
import sun from '../../assets/images.png';

const Results = ({ results }) => {
  return (
    <div className="results">
      <div className="content">
        <div className="left-column">
          <h2>Thursday, 10:19</h2>
          <div className="card">
            <img src={sun} alt="sun" />
          </div>
          <h1>14c</h1>
          <h2>mostly sunny</h2>
        </div>
        <div className="right-column">
          <h2>Today’s highlights</h2>
          <div className="right-container">
            <div className="card">
              <h2>Uv Index</h2>
              <h3>5</h3>
              <p>high levels</p>
            </div>
            <div className="card">
             <h3>Wind statut</h3>
             <h1>13.7 km/h</h1>
            </div>
            <div className="card">
              <h3>Sunrise & Sunset</h3>
              <img src={sun} alt="sun" />
            </div>
            <div className="card">
              <h3>Predictions</h3>
              <h1>100mm</h1>
              <h2>in the last 24h</h2>
              <p>650 mm in the next 6 days</p>
            </div>
            <div className="card">
              <h3>Predictions</h3>
              <h1>100mm</h1>
              <h2>in the last 24h</h2>
              <p>650 mm in the next 6 days</p>
            </div>
            <div className="card">
              <h3>Humidity</h3>
              <h1>71 %</h1>
              <p>the dew point is 11°</p>
            </div>
            <div className="card">
              <h3>Visibility</h3>
              <h1>10 km</h1>
              <p>the sky is partially clear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
