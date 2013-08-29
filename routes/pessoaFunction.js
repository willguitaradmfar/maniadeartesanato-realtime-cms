module.exports = function(app, db) {
    return {
        getPessoas: function (callback) {
            db.Pessoa.find(function (err, pessoas) {
                if (pessoas.length > 0) {
                    callback(pessoas);
                } else {
                    callback(null);
                }
            });
        },
       
        getPessoaById: function (id, callback) {
            db.Pessoa.findOne({_id: id}, function (err, pessoa) {
                if (pessoa) {
                    callback(pessoa);
                } else {
                    callback(pessoa);
                }
            });
        }

    };
};