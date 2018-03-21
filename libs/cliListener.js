var events = require('events');
var net = require('net');
var http = require('http');

var listener = module.exports = function listener(port){

    var _this = this;

    var emitLog = function(text){
        _this.emit('log', text);
    };


    this.start = function(){
        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' }); 
            res.end('\n'); 
        }).listen(port); 
        


        /*net.createServer(function(c) {

            var data = '';
            try {
                c.on('data', function (d) {
                    data += d;
                    if (data.slice(-1) === '\n') {
                        var message = JSON.parse(data);
                        _this.emit('command', message.command, message.params, message.options, function(message){
                            c.end(message);
                        });
                    }
                });
                c.on('end', function () {

                });
                c.on('error', function () {
                    
                });
            }
            catch(e){
                emitLog('CLI listener failed to parse message ' + data);
            }

        }).listen(port, function() {
            emitLog('CLI listening on port ' + port)
        });*/
    }

};

listener.prototype.__proto__ = events.EventEmitter.prototype;
