import React from 'react';

export default function AudienceType() {
  return (
    <main className="audience-type">
      <div className="audience-type__container">
        <h3>Interview Questionnaire</h3>
        <p>
          We have filled in your audience types base from your business
          category. We have also added some suggestions below you can add. You
          can still edit this base on your choices.
        </p>
        <form className="audience-type__form">
          <label>
            Business Category
            <input placeholder="Eg. Fashion"></input>
          </label>
        </form>
      </div>
    </main>
  );
}
