const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send http request
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }    
}

module.exports = Logger;