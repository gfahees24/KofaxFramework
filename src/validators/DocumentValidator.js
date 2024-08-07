const Joi = require('joi');

class DocumentValidator {
    static validate(document) {
        const schema = Joi.object({
            id: Joi.number().required(),
            content: Joi.string().required(),
            transformed: Joi.boolean(),
            processed: Joi.boolean()
        });

        return schema.validate(document);
    }
}

module.exports = DocumentValidator;
