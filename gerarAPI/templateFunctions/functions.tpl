module.exports = function(app, db) {
    return {
        get$$nameQ$$s: function (callback) {
            db.$$nameQ$$.find(function (err, $$name$$s) {
                if ($$name$$s.length > 0) {
                    callback($$name$$s);
                } else {
                    callback(null);
                }
            });
        },
       
        get$$nameQ$$ById: function (id, callback) {
            db.$$nameQ$$.findOne({_id: id}, function (err, $$name$$) {
                if ($$name$$) {
                    callback($$name$$);
                } else {
                    callback($$name$$);
                }
            });
        }

    };
};