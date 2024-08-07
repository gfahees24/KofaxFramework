const axios = require('axios');
const Logger = require('../utils/Logger');
const ConfigManager = require('../utils/ConfigManager');
const ErrorHandler = require('../utils/ErrorHandler');

class ApiIntegration {
    static async sendToExternalApi(data) {
        try {
            Logger.info('Sending data to external API...');
            const apiUrl = ConfigManager.get('externalApiUrl');
            const response = await axios.post(apiUrl, data);
            Logger.info('Data sent to external API successfully.');
            return response.data;
        } catch (error) {
            Logger.error('Error in API integration: ' + error.message);
            ErrorHandler.handleError(error);
        }
    }
}

module.exports = ApiIntegration;
