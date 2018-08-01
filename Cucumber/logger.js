const winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: 'Cucumber/logs/myLogsForCucumber.log',
            timestamp: () => {
                let currentMoment = new Date(Date.now());
                return currentMoment.toLocaleString('ru', { timeZone: 'Europe/Minsk' });
            }
        }),
        new (winston.transports.File)({
            name: 'error-log',
            filename: './logs/error.log',
            level: 'error'
        })
    ]
});

module.exports = { logger };