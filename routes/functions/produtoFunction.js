module.exports = function(app, db) {
    return {
        getProdutos: function (callback) {
            db.Produto.find(function (err, produtos) {
                if (produtos.length > 0) {
                    callback(produtos);
                } else {
                    callback(null);
                }
            });
        },
       
        getProdutoById: function (id, callback) {
            db.Produto.findOne({_id: id}, function (err, produto) {
                if (produto) {
                    callback(produto);
                } else {
                    callback(produto);
                }
            });
        }

    };
};