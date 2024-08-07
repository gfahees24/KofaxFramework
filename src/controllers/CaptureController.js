const CaptureWorkflow = require('../capture/CaptureWorkflow');
const Logger = require('../utils/Logger');

class CaptureController {
    static async runCapture(req, res) {
        try {
            const documents = await CaptureWorkflow.executeCaptureWorkflow();
            res.status(200).json(documents);
        } catch (error) {
            Logger.error('Error in CaptureController: ' + error.message);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CaptureController;
