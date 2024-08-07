const fs = require('fs');
const path = require('path');

class Logger {
    static logFilePath = path.join(__dirname, '../../logs/app.log');

    static info(message) {
        this.log(`[INFO] ${message}`);
    }

    static error(message) {
        this.log(`[ERROR] ${message}`);
    }

    static log(message) {
        const logMessage = `${new Date().toISOString()} ${message}\n`;
        console.log(logMessage);
        fs.appendFileSync(this.logFilePath, logMessage);
    }
}

module.exports = Logger;
