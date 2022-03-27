import React from 'react';

export default function BusinessCategory(props) {
  return (
    <main className="business-category">
      <div className="business-category__container">
        <h3>Choose your business category</h3>
        <p>
          Choose your business category. This will be a factor so that your next
          questions will provide suggestions base on this.
        </p>
        <form className="business-category__form">
          <label>
            Business Category
            <input placeholder="Eg. Fashion"></input>
          </label>

          <div className="business-category__button-wrapper">
            <a
              className="business-category__next-btn"
              href="#"
              onClick={() => props.jumpToStep(1)}
            >
              Next
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
