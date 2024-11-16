import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
    }, [number]);

    return (
    <div className="App">
        <h2>{number}</h2>
        <button onClick={() => {setNumber(prevState => prevState + 1);}}>increment</button>
        <button onClick={() => {setNumber(prevState => prevState - 1)}}>decrement</button>
    </div>
  );
}

export default App;
