const config = require('../../config/config.json');

class ConfigManager {
    static get(key) {
        return config[key];
    }
}

module.exports = ConfigManager;
