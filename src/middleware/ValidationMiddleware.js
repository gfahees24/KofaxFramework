const DocumentValidator = require('/validators/DocumentValidator');

class ValidationMiddleware {
    static validateDocuments(req, res, next) {
        const { error } = DocumentValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
}

module.exports = ValidationMiddleware;
