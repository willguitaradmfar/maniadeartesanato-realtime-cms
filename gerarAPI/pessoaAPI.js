module.exports = function(app, config, db, query) {
   
    app.post('/pessoa', function(req, res) {
        console.log('Pessoas posts');
        console.log(req.body);        

        var newPessoa = new db.Pessoa();

        req.body.content = req.body.content.replace(/<script>.*<\/script>/gi, "");

        req.body._id = newPessoa._id;

        //newPessoa.title = req.body.title;
        
 		newPessoa.uid = req.body.uid
 		newPessoa.username = req.body.username
 		newPessoa.fullName = req.body.fullName
 		newPessoa.provider = req.body.provider
 		newPessoa.telephone = req.body.telephone
 		newPessoa.image = req.body.image
 		newPessoa.role = req.body.role
 		newPessoa.email = req.body.email
 		newPessoa.registerDate = req.body.registerDate
 		newPessoa.accountState = req.body.accountState
 		newPessoa.pass = req.body.pass
 		newPessoa.salt = req.body.salt

        newPessoa.save();

        io.sockets.emit('pessoa::create', newPessoa);
        io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green padding_small"><div>' + newPessoa.title + '</div> created by <strong>' + req.user.username + '</strong></div>');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/pessoa/:id', function(req, res) {
        console.log('Pessoas put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        req.body.content = req.body.content.replace(/<script>.*<\/script>/gi, "");

        query.getPessoaById(id, function (newPessoa) {

        //newPessoa.title = req.body.title;
            
 		newPessoa.uid = req.body.uid
 		newPessoa.username = req.body.username
 		newPessoa.fullName = req.body.fullName
 		newPessoa.provider = req.body.provider
 		newPessoa.telephone = req.body.telephone
 		newPessoa.image = req.body.image
 		newPessoa.role = req.body.role
 		newPessoa.email = req.body.email
 		newPessoa.registerDate = req.body.registerDate
 		newPessoa.accountState = req.body.accountState
 		newPessoa.pass = req.body.pass
 		newPessoa.salt = req.body.salt            

            newPessoa.save();

            io.sockets.emit('pessoa::update', newPessoa);
            io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green padding_small"><div>' + newPessoa.title + '</div> <strong>updated</strong></div>');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/pessoa/:id', function(req, res) {
        console.log('Pessoas delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getPessoaById(id, function (newPessoa) {
            io.sockets.emit('notifications', '<div class="bck b_red_light text color c_red padding_small"><div>' + newPessoa.title + '</div> <strong>removed</strong></div>');

            newPessoa.remove();

            io.sockets.emit('pessoa::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};