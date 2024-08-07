const axios = require('axios');
const Logger = require('../utils/Logger');
const ErrorHandler = require('../utils/ErrorHandler');
const ConfigManager = require('../utils/ConfigManager');

class KofaxCaptureService {
    static async initializeCapture() {
        // Initialize Kofax Capture settings
        try {
            Logger.info('Initializing Kofax Capture...');
            // Hypothetical initialization logic
        } catch (error) {
            Logger.error('Error initializing Kofax Capture: ' + error.message);
            ErrorHandler.handleError(error);
            throw new Error('Initialization failed');
        }
    }

    static async captureDocuments() {
        // Capture documents using Kofax Capture
        try {
            Logger.info('Capturing documents...');
            const response = await axios.get(`${ConfigManager.get('captureApiUrl')}/documents`);
            Logger.info('Documents captured successfully.');
            return response.data.documents;
        } catch (error) {
            Logger.error('Error capturing documents: ' + error.message);
            ErrorHandler.handleError(error);
            throw new Error('Document capture failed');
        }
    }
}

module.exports = KofaxCaptureService;
