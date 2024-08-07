const CaptureWorkflow = require('../src/capture/CaptureWorkflow');
const assert = require('assert');

describe('Capture Workflow', () => {
    it('should execute without errors', async () => {
        const documents = await CaptureWorkflow.executeCaptureWorkflow();
        assert.ok(documents, 'Documents should not be null or undefined');
        assert.ok(documents.length > 0, 'Documents array should not be empty');
    });
});
