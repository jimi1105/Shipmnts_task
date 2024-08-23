import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <FileUpload />
            </header>
        </div>
    );
};

export default App;
