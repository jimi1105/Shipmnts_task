import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>File Upload and Data Management</h1>
                <FileUpload />
            </header>
        </div>
    );
};

export default App;
