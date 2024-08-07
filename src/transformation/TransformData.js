const KofaxTransformationService = require('../services/KofaxTransformationService');
const Logger = require('../utils/Logger');
const ErrorHandler = require('../utils/ErrorHandler');

class TransformData {
    static async executeTransformation(documents) {
        try {
            Logger.info('Starting data transformation...');
            const transformedDocuments = await KofaxTransformationService.transform(documents);
            Logger.info('Data transformation completed successfully.');
            return transformedDocuments;
        } catch (error) {
            Logger.error('Error in data transformation: ' + error.message);
            ErrorHandler.handleError(error);
        }
    }
}

module.exports = TransformData;
