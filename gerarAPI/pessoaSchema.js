var mongoose    = require('mongoose'),
    config      = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) throw err;
});

var pessoaSchema = mongoose.Schema(
    ({'uid': 'String',
    'nome': 'String',
    'telephone': 'String'})
);

module.exports = {
    Pessoa: mongoose.model('pessoa', pessoaSchema)    
};