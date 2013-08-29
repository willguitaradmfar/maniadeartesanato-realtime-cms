var mongoose    = require('mongoose'),
    config      = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) throw err;
});

var $$name$$Schema = mongoose.Schema(
    $$schema$$
);

module.exports = {
    $$nameQ$$: mongoose.model('$$name$$', $$name$$Schema)    
};