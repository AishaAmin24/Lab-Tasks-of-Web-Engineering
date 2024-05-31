import React, { useState } from 'react';

const StepForm = () => {
  const initialSteps = { step1: false, step2: false, step3: false, step4: false };
  const [userSteps, setUserSteps] = useState([
    { ...initialSteps },
    { ...initialSteps },
    { ...initialSteps },
    { ...initialSteps }
  ]);
  const [activeUser, setActiveUser] = useState(0);

  const handleStepChange = (userIndex, step) => {
    const updatedUserSteps = [...userSteps];
    updatedUserSteps[userIndex][step] = true;

    setUserSteps(updatedUserSteps);

    if (Object.values(updatedUserSteps[userIndex]).every(stepCompleted => stepCompleted)) {
      if (userIndex < userSteps.length - 1) {
        resetUserSteps(userIndex);
        setActiveUser(userIndex + 1);
      }
    }
  };

  const resetUserSteps = (userIndex) => {
    const updatedUserSteps = [...userSteps];
    updatedUserSteps[userIndex] = { ...initialSteps };

    setUserSteps(updatedUserSteps);
  };

  return (
    <div>
      {userSteps.map((user, userIndex) => (
        <div key={userIndex} style={{ marginBottom: '20px' }}>
          <h2>User {userIndex + 1}</h2>
          {Object.keys(user).map((step, stepIndex) => (
            <button
              key={stepIndex}
              disabled={activeUser !== userIndex}
              onClick={() => handleStepChange(userIndex, step)}
              style={{ backgroundColor: user[step] ? 'green' : 'grey', marginRight: '10px' }}
            >
              {step}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StepForm;