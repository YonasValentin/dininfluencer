import React from 'react';

export default function Budget() {
  return (
    <main className="budget">
      <div className="budget__container">
        <h3>Enter your budget</h3>
        <p>
          We have filled in your ideal budget and frequency base from your
          recent inputs. You can still edit this base on your choices.
        </p>
        <form className="budget__form">
          <label className="budget__wrapper">
            Budget
            <input className="budget__input" placeholder="Eg. $ 6.000"></input>
            <p className="budget__word">per</p>
            <select>
              <option>Month</option>
            </select>
          </label>
        </form>
      </div>
    </main>
  );
}
