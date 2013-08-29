module.exports = function(app, config, db, query) {

    app.get('/pessoas', function(req, res) {
        query.getPessoas(function(pessoa) {
            res.send(pessoa);
        });
    });

    app.get('/pessoa/:id', function(req, res) {
        var id = req.params.id; 
        query.getPessoaById(id, function(pessoa) {
            res.send(pessoa);
        });
    });
   
    app.post('/pessoa', function(req, res) {
        console.log('Pessoas posts');
        console.log(req.body);        

        var newPessoa = new db.Pessoa();
       

        req.body._id = newPessoa._id;

        //newPessoa.title = req.body.title;
        
        newPessoa.uid = req.body.uid
        newPessoa.nome = req.body.nome
        newPessoa.telephone = req.body.telephone

        newPessoa.save();

        io.sockets.emit('pessoa::create', newPessoa);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/pessoa/:id', function(req, res) {
        console.log('Pessoas put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.getPessoaById(id, function (newPessoa) {

        //newPessoa.title = req.body.title;
            
        newPessoa.uid = req.body.uid
        newPessoa.nome = req.body.nome
        newPessoa.telephone = req.body.telephone            

            newPessoa.save();

            io.sockets.emit('pessoa::update', newPessoa);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/pessoa/:id', function(req, res) {
        console.log('Pessoas delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getPessoaById(id, function (newPessoa) {
            io.sockets.emit('notifications', '');

            newPessoa.remove();

            io.sockets.emit('pessoa::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};