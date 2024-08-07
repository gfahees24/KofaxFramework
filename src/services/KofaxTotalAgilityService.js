const axios = require('axios');
const Logger = require('../utils/Logger');
const ErrorHandler = require('../utils/ErrorHandler');
const ConfigManager = require('../utils/ConfigManager');

class KofaxTotalAgilityService {
    static async authenticate() {
        try {
            Logger.info('Authenticating with Kofax TotalAgility...');
            const response = await axios.post(`${ConfigManager.get('ktaApiUrl')}/auth/login`, {
                username: ConfigManager.get('ktaUsername'),
                password: ConfigManager.get('ktaPassword')
            });
            Logger.info('Authentication successful.');
            return response.data.token;
        } catch (error) {
            Logger.error('Error authenticating with Kofax TotalAgility: ' + error.message);
            ErrorHandler.handleError(error);
            throw new Error('Authentication failed');
        }
    }

    static async processWithKTA(documents) {
        try {
            Logger.info('Processing documents with Kofax TotalAgility...');
            const token = await this.authenticate();
            
            const processedDocuments = [];
            for (const doc of documents) {
                const response = await axios.post(`${ConfigManager.get('ktaApiUrl')}/process`, doc, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                processedDocuments.push(response.data);
            }

            Logger.info('Documents processed successfully with Kofax TotalAgility.');
            return processedDocuments;
        } catch (error) {
            Logger.error('Error processing documents with Kofax TotalAgility: ' + error.message);
            ErrorHandler.handleError(error);
            throw new Error('Document processing failed');
        }
    }
}

module.exports = KofaxTotalAgilityService;
