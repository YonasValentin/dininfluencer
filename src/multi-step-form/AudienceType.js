import React from 'react';
//import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import TooltipSlider from '../components/TooltipSlider.tsx';

export default function AudienceType(props) {
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
          <label className="age__wrapper">
            Age
            <TooltipSlider
              range
              /* marks={{
                18: `18+`,
                100: `100`,
              }} */
              min={18}
              max={100}
              defaultValue={[18, 30]}
              tipFormatter={(value) => `${value}`}
              tipProps={{
                placement: 'bottom',
                visible: true,
              }}
              pushable={true}
            />
          </label>
          <label className="keywords_wrapper">
            Keywords
            <input placeholder="Eg. Fashion"></input>
          </label>

          <label className="followers__wrapper">
            Followers
            <select className="followers__from">
              <option></option>
              <option></option>
              <option></option>
            </select>
            <select className="followers__to">
              <option></option>
              <option></option>
              <option></option>
            </select>
          </label>

          <label className="engagement__wrapper">
            Engagement
            <select className="engagement__from">
              <option></option>
              <option></option>
              <option></option>
            </select>
            <select className="engagement__to">
              <option></option>
              <option></option>
              <option></option>
            </select>
          </label>

          <div className="audience-type__button-wrapper">
            <a
              className="audience-type__prev-btn"
              href="#"
              onClick={() => props.jumpToStep(0)}
            >
              Previous
            </a>
            <a
              className="audience-type__next-btn"
              href="#"
              onClick={() => props.jumpToStep(2)}
            >
              Next
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
