import React from 'react';

export default function Budget(props) {
  const [budgetValue, setBudgetValue] = React.useState('');
  const [budgetWordValue, setBudgetWord] = React.useState('');

  const handleBudget = (e) => {
    sessionStorage.setItem('budgetValue', e.target.value);
    setBudgetValue(e.target.value);
  };

  const handleBudgetWord = (e) => {
    sessionStorage.setItem('budgetWordValue', e.target.value);
    setBudgetWord(e.target.value);
  };

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
            <input
              onChange={handleBudget}
              value={budgetValue}
              className="budget__input"
              placeholder="Eg. $ 6.000"
            ></input>
            <p className="budget__word">per</p>
            <select onChange={handleBudgetWord} value={budgetWordValue}>
              <option>Month</option>
              <option>Week</option>
              <option>Year</option>
            </select>
          </label>

          <div className="budget__button-wrapper">
            <a
              className="budget__prev-btn"
              href="#"
              onClick={() => props.jumpToStep(1)}
            >
              Previous
            </a>
            <a
              className="budget__next-btn"
              href="#"
              onClick={() => props.jumpToStep(3)}
            >
              Next
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
