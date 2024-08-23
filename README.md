# Company Data Management System

A web application for managing company data, including file uploads, data parsing, and storage in MongoDB . The project consists of a backend built with Express and MongoDB, and a frontend built with React.

## Features

- Upload Excel files containing company information.
- Parse the uploaded Excel files.
- Save parsed data to a MongoDB database.
- View parsed data and manage the company records.

## Technologies Used

- **Frontend:** React, Vite, Axios
- **Backend:** Express, MongoDB, Mongoose, Multer
- **Database:** MongoDB 

## Installation

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jimi1105/Shipmnts_task.git
   cd Shipmnts_task/server

2. **Install Dependencies**
   npm install

3. **Set Up Environment Variables**

  Create a .env file in the backend directory with the following content:
   DATABASE_URL = "mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority"

4. **Start the Server**
   npm start

The server will run on http://localhost:3000.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../client

 2. **Install Dependencies**
    
    ```bash
    npm install
    
3. **Start the Development Server**
    
    ```bash
   npm run dev
    
  The frontend application will be available at http://localhost:5173.

## Usage

1. **Upload File**

   - Navigate to `http://localhost:5173` in your browser.
   - Use the file input to select and upload an Excel file containing company data.

2. **View Parsed Data**

   - The parsed data will be displayed on the frontend after the upload.

3. **Save Data**

   - After uploading the file, click the "Save Data" button to save the parsed data to the MongoDB database.


## API Endpoints

- **POST /api/upload**  
  Upload an Excel file and parse its contents.

- **POST /api/save**  
  Save the parsed data to the MongoDB database.


**Acknowledgments**
Vite: A fast build tool for modern web projects.
React: A JavaScript library for building user interfaces.
Express: A minimal and flexible Node.js web application framework.
MongoDB Atlas: A fully-managed cloud database service.


