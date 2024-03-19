import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [welMsg, setWelMsg] = useState('This is my first webpage');

    const handleIC = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setWelMsg(`Welcome to the webpage, ${name}!`);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <label>Enter your name:</label>
                    <input placeholder="Enter Name" id="name" type="text" value={name} onChange={handleIC}/>
                    <button type="submit">Submit</button>
                </form>
                {<h1>{welMsg}</h1>}
            </header>
        </div>
    );
}

export default App;
