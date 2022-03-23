import React from 'react';

export default function BusinessCategory() {
  return (
    <main className="business-category">
      <div className="business-category__container">
        <h3>Interview Questionnaire</h3>
        <p>
          Choose your business category. This will be a factor so that your next
          questions will provide suggestions base on this.
        </p>
        <form className="business-category__form">
          <label>
            Business Category
            <input placeholder="Eg. Fashion"></input>
          </label>
        </form>
      </div>
    </main>
  );
}
