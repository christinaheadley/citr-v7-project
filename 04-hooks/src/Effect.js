import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  // also a good idea to return a setter or reader as a dependency in your dependencies, so:
  //   return () => clearTimeout(timer);
  // }, [time]);   // OR
  // }, [time, setTime]); //to follow ESLint rule

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;

// If you need to connect a React component to jquery (eg. Datepicker), you would control that in line 4, and then from an effect you would unmount it (line 8), to prevent memory leaks.

// The point of useEffect is to contain side effects
