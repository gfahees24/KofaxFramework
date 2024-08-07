const axios = require('axios');
const Logger = require('../utils/Logger');
const ErrorHandler = require('../utils/ErrorHandler');
const ConfigManager = require('../utils/ConfigManager');

class KofaxTransformationService {
    static async transform(documents) {
        // Transform documents using Kofax Transformation Modules
        try {
            Logger.info('Transforming documents...');
            const transformedDocuments = [];
            for (const doc of documents) {
                const response = await axios.post(`${ConfigManager.get('transformationApiUrl')}/transform`, doc);
                transformedDocuments.push(response.data);
            }
            Logger.info('Documents transformed successfully.');
            return transformedDocuments;
        } catch (error) {
            Logger.error('Error transforming documents: ' + error.message);
            ErrorHandler.handleError(error);
            throw new Error('Document transformation failed');
        }
    }
}

module.exports = KofaxTransformationService;
