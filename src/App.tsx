import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useFetch} from "./hooks/useFetch";

function App() {

    const users = useFetch();


    return (
    <div className="App">
        {users.map((user) => (<div key={user.id}>{user.id}</div>))}
    </div>
  );
}

export default App;
