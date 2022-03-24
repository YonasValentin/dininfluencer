import React from 'react';
//import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import TooltipSlider from '../components/TooltipSlider.tsx';

export default function AudienceType() {
  return (
    <main className="audience-type">
      <div className="audience-type__container">
        <h3>Choose your audience</h3>
        <p>
          We have filled in your audience types base from your business
          category. We have also added some suggestions below you can add. You
          can still edit this base on your choices.
        </p>
        <form className="audience-type__form">
          <label className="audience-type__gender">
            Gender
            <select>
              <option value="" defaultValue>
                Both
              </option>
              <option>Man</option>
              <option>Woman</option>
            </select>
          </label>
          <label>
            Age
            <TooltipSlider
              range
              min={18}
              max={100}
              defaultValue={[3, 10]}
              tipFormatter={(value) => `${value}`}
            />
          </label>
          <label>
            Business Category
            <input placeholder="Eg. Fashion"></input>
          </label>
        </form>
      </div>
    </main>
  );
}
