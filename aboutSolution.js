```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('About page mounted');
        let interval;
        // Ensure the previous interval is cleared before setting a new one
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, [count]);

    return (
        <div>
            <h1>About Page</h1>
            <p>Count: {count}</p>
        </div>
    )
}
```