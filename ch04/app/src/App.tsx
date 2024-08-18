// Listing 4-8 - Modify App.tsx to add PersonScore component.

import React from 'react';
import './App.css';
import { PersonScore } from './PersonScore';

function App() {
    return <div className="App">
        <PersonScore />
    </div>;
}

export default App;
