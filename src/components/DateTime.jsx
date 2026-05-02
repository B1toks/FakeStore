"use client";

import { useState, useEffect } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import './css/DateTime.css';

const DateTime = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!date) {
    return <div className="datetime" aria-hidden="true" />;
  }

  return (
    <div className="datetime">
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  );
};

export default DateTime;
