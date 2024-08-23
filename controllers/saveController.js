const Company = require('../models/company')

const saveData = async (req, res) => {
    try {
        const parsedData = req.session.parsedData; // Retrieve parsed data from session

        if (!parsedData || !parsedData.length) {
            return res.status(400).send('No data to save.');
        }

        const authorsMap = new Map();

        for (const row of parsedData) {
            await Company.findOneAndUpdate(
                { email: row.email }, // Find by email to ensure uniqueness
                {
                    companyName: row.companyName,
                    email: row.email,
                    phone: row.phone,
                    address: row.address,
                    establishedDate: row.establishedDate,
                },
                { new: true, upsert: true } // Create new or update existing
            );
        }

        // Clear session data after saving
        req.session.parsedData = null;

        return res.status(200).send('Data saved successfully.');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error saving data.');
    }
};

module.exports = {
    saveData,
};
