import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {

    //we can get DOM element like in js
    const customRef = useRef<any>();
    // we can't use useRef in UX/UI
    // useRef can't be rendered!!!

    return (
    <div className="App">
        <input ref={customRef} type="text"/>
        <button onClick={() => {
            console.log(customRef)
        }}>click me</button>
    </div>
  );
}

export default App;
