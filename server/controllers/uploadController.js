const XLSX = require('xlsx');

const uploadFile = (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const parsedData = worksheet.map(row => {
            // Validate the required field

            if (!row['Company Name'] || !row['Contact Email'] || !row['Established Date']) {
                throw new Error('Invalid data format.');
            }
            
            return {
                companyName: row['Company Name'],
                email: row['Contact Email'],
                phone: row['Contact Phone'] || null, // Optional field
                address: row['Contact Address'] || null, // Optional field
                establishedDate: row['Established Date'] ? new Date(row['Established Date']) : null,
            };

        });


        // Send parsed data back to frontend
        return res.status(200).json({ data: parsedData });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error processing the file.');
    }
};

module.exports = {
    uploadFile,
};
