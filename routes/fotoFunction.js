module.exports = function(app, db) {
    return {
        getFotos: function (callback) {
            db.Foto.find(function (err, fotos) {
                if (fotos.length > 0) {
                    callback(fotos);
                } else {
                    callback(null);
                }
            });
        },
       
        getFotoById: function (id, callback) {
            db.Foto.findOne({_id: id}, function (err, foto) {
                if (foto) {
                    callback(foto);
                } else {
                    callback(foto);
                }
            });
        }

    };
};