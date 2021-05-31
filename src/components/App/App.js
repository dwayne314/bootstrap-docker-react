import React, { useState } from 'react';
import './App.css';


const App = () => {
    const [title, setTitle] = useState('Click Me');
    const handleClick = (evt) => setTitle('Clicked');

    return (
        <button onClick={handleClick}>{`${title}`}</button>
    );
};

export default App;
