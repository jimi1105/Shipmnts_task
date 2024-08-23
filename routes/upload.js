const multer = require('multer');
const express = require('express');
const router = express.Router();

const saveController = require("../controllers/saveController");
const uploadController = require('../controllers/uploadController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage,  limits: { fileSize: 10 * 1024 * 1024 }  });

router.post('/upload', upload.single('file'), uploadController.uploadFile);
router.post('/save', saveController.saveData);

module.exports = router;
