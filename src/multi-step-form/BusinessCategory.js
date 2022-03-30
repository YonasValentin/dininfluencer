import React from 'react';

export default function BusinessCategory(props) {
  const [businessCategoryValue, setBusinessCategoryValue] = React.useState('');

  const handleBusinessCategory = (e) => {
    sessionStorage.setItem(
      'businessCategoryValue',
      JSON.stringify(e.target.value).toLowerCase()
    );
    setBusinessCategoryValue(e.target.value);
  };
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
            <input
              onChange={handleBusinessCategory}
              value={businessCategoryValue}
              placeholder="Eg. Fashion"
            ></input>
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
