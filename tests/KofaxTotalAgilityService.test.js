const KofaxTotalAgilityService = require('../src/services/KofaxTotalAgilityService');
const assert = require('assert');

describe('Kofax TotalAgility Service', () => {
    it('should process documents successfully', async () => {
        const documents = [{ id: 1, content: 'Sample Document' }];
        const processedDocuments = await KofaxTotalAgilityService.processWithKTA(documents);
        assert.ok(processedDocuments, 'Processed documents should not be null or undefined');
        assert.ok(processedDocuments.length > 0, 'Processed documents array should not be empty');
    });
});
