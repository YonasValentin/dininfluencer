import React from 'react';
import BusinessCategory from './BusinessCategory';
import AudienceType from './AudienceType';
import Budget from './Budget';
import Location from './Location';
import InfluencerOverview from '../pages/InfluencerOverview';
import StepZilla from 'react-stepzilla';

export default function MultiStepForm() {
  const steps = [
    { name: 'Business Category', component: <BusinessCategory /> },
    { name: 'Audience Type', component: <AudienceType /> },
    { name: 'Budget', component: <Budget /> },
    { name: 'Choose location', component: <Location /> },
    { name: 'Final Step', component: <InfluencerOverview /> },
  ];

  return (
    <main className="multi-step-form">
      <div className="multi-step-form__container">
        <StepZilla
          startAtStep={
            window.sessionStorage.getItem('step')
              ? parseFloat(window.sessionStorage.getItem('step'))
              : 0
          }
          onStepChange={(step) => window.sessionStorage.setItem('step', step)}
          steps={steps}
          showSteps={true}
        />
      </div>
    </main>
  );
}
