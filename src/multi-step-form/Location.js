import React from 'react';

export default function Location() {
  return (
    <main className="location">
      <div className="location__container">
        <h3>Interview Questionnaire</h3>
        <p>
          Choose your business category. This will be a factor so that your next
          questions will provide suggestions base on this.
        </p>
        <form className="location__form">
          <label>
            Business Category
            <input placeholder="Eg. Fashion"></input>
          </label>
        </form>
      </div>
    </main>
  );
}
