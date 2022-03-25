import React from 'react';
import 'rc-slider/assets/index.css';
import LocationSlider from '../components/LocationSlider';

export default function Location() {
  return (
    <main className="location">
      <div className="location__container">
        <h3>Choose location</h3>
        <p>
          We have filled in your ideal local locations for your campaign from
          your recent inputs. You can still edit this base on your choices.
        </p>
        <form className="location__form">
          <label>
            Local Campaigns
            <LocationSlider />
            <LocationSlider />
            <LocationSlider />
            <LocationSlider />
            <LocationSlider />
          </label>
        </form>
      </div>
    </main>
  );
}
