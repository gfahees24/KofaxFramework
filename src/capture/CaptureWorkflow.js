const KofaxCaptureService = require('../services/KofaxCaptureService');
const Logger = require('../utils/Logger');
const ErrorHandler = require('../utils/ErrorHandler');

class CaptureWorkflow {
    static async executeCaptureWorkflow() {
        try {
            Logger.info('Starting capture workflow...');
            await KofaxCaptureService.initializeCapture();
            const documents = await KofaxCaptureService.captureDocuments();
            Logger.info('Capture workflow completed successfully.');
            return documents;
        } catch (error) {
            Logger.error('Error in capture workflow:' + error.message);
            ErrorHandler.handleError(error);
        }
    }
}

module.exports = CaptureWorkflow;

  