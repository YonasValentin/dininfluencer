import React from 'react';
import BusinessCategory from './BusinessCategory';
import AudienceType from './AudienceType';
import Budget from './Budget';
import Location from './Location';
import StepZilla from 'react-stepzilla';

export default function MultiStepForm() {
  const steps = [
    { name: 'Business Category', component: <BusinessCategory /> },
    { name: 'Audience Type', component: <AudienceType /> },
    { name: 'Budget', component: <Budget /> },
    { name: 'Choose location', component: <Location /> },
  ];

  return (
    <main className="multi-step-form">
      <div className="multi-step-form__container">
        <StepZilla steps={steps} showSteps={true} />
      </div>
    </main>
  );
}
