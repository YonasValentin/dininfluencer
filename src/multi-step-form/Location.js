import React from 'react';
import 'rc-slider/assets/index.css';
import LocationSlider from '../components/LocationSlider';
import { Link } from 'react-router-dom';

export default function Location(props) {
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

          <div className="location__button-wrapper">
            <a
              className="location__prev-btn"
              href="#"
              onClick={() => props.jumpToStep(2)}
            >
              Previous
            </a>
            <Link className="location__next-btn" to="/influencer-overview">
              Save
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
