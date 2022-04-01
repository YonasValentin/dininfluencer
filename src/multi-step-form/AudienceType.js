import React from 'react';
//import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import TooltipSlider from '../components/TooltipSlider.tsx';

export default function AudienceType(props) {
  const [followersFromValue, setFollowersFromValue] = React.useState('');
  const [followersToValue, setFollowersToValue] = React.useState('');

  sessionStorage.setItem('followersFromValue', (followersFromValue));

  sessionStorage.setItem('followersToValue', (followersToValue));

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
              //onChange={handleAge}
              //value={ageValue}
            />
          </label>
          <label className="keywords_wrapper">
            Keywords
            <input
              placeholder="Eg. Fashion"
            ></input>
          </label>

          <label className="followers__wrapper">
            Followers
            <select
              onChange={(e) => setFollowersFromValue(e.target.value)}
              value={followersFromValue}
              className="followers__from"
              defaultValue={300}
            >
              <option selected>300</option>
              <option>500</option>
              <option>700</option>
              <option>1000</option>
              <option>1200</option>
              <option>1400</option>
              <option>1600</option>
              <option>1800</option>
              <option>2000</option>
              <option>2200</option>
              <option>2400</option>
              <option>2600</option>
              <option>2800</option>
              <option>3000</option>
              <option>3200</option>
              <option>3400</option>
              <option>3600</option>
              <option>3800</option>
              <option>4000</option>
              <option>4200</option>
              <option>4400</option>
              <option>4600</option>
              <option>4800</option>
              <option>5000</option>
              <option>5200</option>
              <option>5400</option>
              <option>5600</option>
              <option>5800</option>
            </select>
            <select
              onChange={(e) => setFollowersToValue(e.target.value)}
              value={followersToValue}
              className="followers__to"
              defaultValue={500}
            >
              <option>300</option>
              <option>500</option>
              <option>700</option>
              <option>1000</option>
              <option>1200</option>
              <option>1400</option>
              <option>1600</option>
              <option>1800</option>
              <option>2000</option>
              <option>2200</option>
              <option>2400</option>
              <option>2600</option>
              <option>2800</option>
              <option>3000</option>
              <option>3200</option>
              <option>3400</option>
              <option>3600</option>
              <option>3800</option>
              <option>4000</option>
              <option>4200</option>
              <option>4400</option>
              <option>4600</option>
              <option>4800</option>
              <option>5000</option>
              <option>5200</option>
              <option>5400</option>
              <option>5600</option>
              <option>5800</option>
            </select>
          </label>

          <label className="engagement__wrapper">
            Engagement
            <select
              className="engagement__from"
            >
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
            <select
              className="engagement__to"
            >
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
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
