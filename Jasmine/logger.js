const winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: 'Jasmine/logs/myLogsForJasmine.log',
            timestamp: () => {
                let currentMoment = new Date(Date.now());
                return currentMoment.toString;
            }
        }),
        new (winston.transports.File)({
            name: 'error-log',
            filename: './logs/error.log',
            level: 'error'
        })
    ]
});

module.exports = {logger};