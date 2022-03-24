import React from 'react';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

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
            <Range
              pushable={true}
              marks={{ 18: '18+', 100: '100' }}
              min={18}
              max={100}
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
