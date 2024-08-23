import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import the CSS for FileUpload component

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);
    const [message, setMessage] = useState('');

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setParsedData(response.data.data);
            setMessage('File uploaded and parsed successfully!');
        } catch (error) {
            setMessage('Error uploading file.');
            console.error(error);
        }
    };

    const onSaveData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/save', { data: parsedData });
            setMessage('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
            setMessage('Error saving data.');
        }
    };


    return (
        <div className="file-upload-container">
            <h2>Upload Excel File</h2>
            <input type="file" accept=".xlsx, .xls" onChange={onFileChange} />
            <button onClick={onUpload}>Upload</button>
            <button onClick={onSaveData} disabled={parsedData.length === 0}>Save Data</button>
            <p>{message}</p>

            {parsedData.length > 0 && (
                <div className="table-container">
                    <h3>Parsed Data:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Established Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parsedData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.companyName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone || 'N/A'}</td>
                                    <td>{item.address || 'N/A'}</td>
                                    <td>{item.establishedDate ? new Date(item.establishedDate).toLocaleDateString() : 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
