module.exports = function(app, config, db, query) {

    app.get('/produtos/all', function(req, res) {
        query.produto.getProdutos(function(produto) {
            res.send(produto);
        });
    });

    app.get('/produto/:id', function(req, res) {
        var id = req.params.id; 
        query.produto.getProdutoById(id, function(produto) {
            res.send(produto);
        });
    });
   
    app.post('/produto', function(req, res) {
        console.log('Produtos posts');
        console.log(req.body);        

        var newProduto = new db.Produto();
       

        req.body._id = newProduto._id;

        //newProduto.title = req.body.title;
        
 		newProduto.uid = req.body.uid
 		newProduto.nome = req.body.nome
 		newProduto.nomeCompleto = req.body.nomeCompleto
 		newProduto.preco = req.body.preco

        newProduto.save();

        io.sockets.emit('produto::create', newProduto);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/produto/:id', function(req, res) {
        console.log('Produtos put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.produto.getProdutoById(id, function (newProduto) {

        //newProduto.title = req.body.title;
            
 		newProduto.uid = req.body.uid
 		newProduto.nome = req.body.nome
 		newProduto.nomeCompleto = req.body.nomeCompleto
 		newProduto.preco = req.body.preco            

            newProduto.save();

            io.sockets.emit('produto::update', newProduto);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/produto/:id', function(req, res) {
        console.log('Produtos delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.produto.getProdutoById(id, function (newProduto) {
            io.sockets.emit('notifications', '');

            newProduto.remove();

            io.sockets.emit('produto::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};