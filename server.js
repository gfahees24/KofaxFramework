const express = require('express');
const CaptureController = require('./src/controllers/CaptureController');
const TransformationController = require('./src/controllers/TransformationController');
const TotalAgilityController = require('./src/controllers/TotalAgilityController');
const ValidationMiddleware = require('./src/middleware/ValidationMiddleware');

const app = express();
app.use(express.json());

app.post('/capture', CaptureController.runCapture);
app.post('/transform', ValidationMiddleware.validateDocuments, TransformationController.runTransformation);
app.post('/kta', ValidationMiddleware.validateDocuments, TotalAgilityController.runKTAProcess);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
