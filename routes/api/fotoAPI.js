module.exports = function(app, config, db, query) {

    app.get('/fotos/all', function(req, res) {
        query.foto.getFotos(function(foto) {
            res.send(foto);
        });
    });

    app.get('/foto/:id', function(req, res) {
        var id = req.params.id; 
        query.foto.getFotoById(id, function(foto) {
            res.send(foto);
        });
    });
   
    app.post('/foto', function(req, res) {
        console.log('Fotos posts');
        console.log(req.body);        

        var newFoto = new db.Foto();
       

        req.body._id = newFoto._id;

        //newFoto.title = req.body.title;
        
 		newFoto.uid = req.body.uid
 		newFoto.nome = req.body.nome
 		newFoto.nomeFile = req.body.nomeFile

        newFoto.save();

        io.sockets.emit('foto::create', newFoto);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/foto/:id', function(req, res) {
        console.log('Fotos put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.foto.getFotoById(id, function (newFoto) {

        //newFoto.title = req.body.title;
            
 		newFoto.uid = req.body.uid
 		newFoto.nome = req.body.nome
 		newFoto.nomeFile = req.body.nomeFile            

            newFoto.save();

            io.sockets.emit('foto::update', newFoto);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/foto/:id', function(req, res) {
        console.log('Fotos delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.foto.getFotoById(id, function (newFoto) {
            io.sockets.emit('notifications', '');

            newFoto.remove();

            io.sockets.emit('foto::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};