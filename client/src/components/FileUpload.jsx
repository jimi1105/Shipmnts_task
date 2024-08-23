import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './FileUpload.css'; 

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onUpload = async () => {
        if (!file) {
            toast.error('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setParsedData(response.data.data);
            toast.success('File uploaded and parsed successfully!');
        } catch (error) {
            toast.error('Error uploading file.');
            console.error(error);
        }
    };

    const onSaveData = async () => {
        if (parsedData.length === 0) {
            toast.warning('No data to save.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/save', { data: parsedData });
            toast.success('Data saved successfully!');
        } catch (error) {
            toast.error('Error saving data.');
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="file-upload-container">
            <h1>File Upload and Data Management</h1>
            <h3>Upload Excel File</h3>
            <input type="file" accept=".xlsx, .xls" onChange={onFileChange} />
            <button onClick={onUpload}>Upload</button>
            <button onClick={onSaveData} disabled={parsedData.length === 0}>Save Data</button>

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
