import React, { useState, useRef } from 'react';
import { Card } from 'react-bootstrap';

const AgeCalculator = () => {
  const [age, setAge] = useState(null);
  const initialDateRef = useRef(null);
  const finalDateRef = useRef(null);

  const calculateAge = () => {
    const initialDate = new Date(initialDateRef.current.value);
    const finalDate = new Date(finalDateRef.current.value);

    const diffInMilliseconds = finalDate - initialDate;
    const ageInYears = Math.floor(diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor((diffInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor((diffInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Handle the case where the day exceeds 30 and increases the month accordingly
    if (ageInDays >= 30) {
      ageInMonths++;
      ageInDays = ageInDays % 30;
    }

    setAge({ years: ageInYears, months: ageInMonths, days: ageInDays });
  };

  return (
    <Card style={{ width: '25rem', margin: '40px auto' }}>
      <Card.Body>
        <h1 className="text-center">Age Calculator</h1>
        <input type="date" ref={initialDateRef} className="form-control" />
        <input type="date" ref={finalDateRef} className="form-control" />
        <button onClick={calculateAge} className="btn btn-primary btn-block">Calculate Age</button>
        {age!== null && (
          <div>
            <h2 className="text-center">Your age is: {age.years} years, {age.months} months, and {age.days} days</h2>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default AgeCalculator;