const TransformData = require('../transformation/TransformData');
const Logger = require('../utils/Logger');

class TransformationController {
    static async runTransformation(req, res) {
        try {
            const documents = req.body;
            const transformedDocuments = await TransformData.executeTransformation(documents);
            res.status(200).json(transformedDocuments);
        } catch (error) {
            Logger.error('Error in TransformationController: ' + error.message);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TransformationController;
