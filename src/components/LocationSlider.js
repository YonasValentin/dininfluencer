import React from 'react';
import 'rc-slider/assets/index.css';
import TooltipSlider from '../components/TooltipSlider.tsx';

export default function LocationSlider() {
  return (
    <article className="location-slider">
      <input
        className="location-slider__input"
        placeholder="Eg. London, UK"
      ></input>
      <label className="location-slider__label">
        Max Radius (km)
        <TooltipSlider
          /* marks={{
            18: `18+`,
            100: `100`,
          }} */
          min={0}
          max={100}
          defaultValue={[10]}
          tipFormatter={(value) => `${value}`}
          tipProps={{
            placement: 'bottom',
            visible: true,
          }}
        />
      </label>
    </article>
  );
}
