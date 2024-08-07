const KofaxTotalAgilityService = require('../services/KofaxTotalAgilityService');
const Logger = require('../utils/Logger');

class TotalAgilityController {
    static async runKTAProcess(req, res) {
        try {
            const documents = req.body;
            const processedDocuments = await KofaxTotalAgilityService.processWithKTA(documents);
            res.status(200).json(processedDocuments);
        } catch (error) {
            Logger.error('Error in TotalAgilityController: ' + error.message);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TotalAgilityController;
