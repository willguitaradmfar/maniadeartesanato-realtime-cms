var mongoose    = require('mongoose'),
    config      = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) throw err;
});

var pessoaSchema = mongoose.Schema(
    ({'uid': 'String',
    'username': 'String',
    'fullName': 'String',
    'provider': 'String',
    'telephone': 'String',
    'image': String,
    'role': {
        'type': 'String',
        'default': 'user'
    },
    'email': 'String',
    'registerDate': {
        'type': 'Date',
        'default': 'Date.now'
    },
    'accountState': {
        'type': 'String',
        'default': 'waiting'
    },
    'pass': String,
    'salt': String})
);

module.exports = {
    Pessoa: mongoose.model('pessoa', pessoaSchema)    
};