module.exports = function(app, config, db, query) {

    app.get('/$$name$$s', function(req, res) {
        query.$$name$$.get$$nameQ$$s(function($$name$$) {
            res.send($$name$$);
        });
    });

    app.get('/$$name$$/:id', function(req, res) {
        var id = req.params.id; 
        query.$$name$$.get$$nameQ$$ById(id, function($$name$$) {
            res.send($$name$$);
        });
    });
   
    app.post('/$$name$$', function(req, res) {
        console.log('$$nameQ$$s posts');
        console.log(req.body);        

        var new$$nameQ$$ = new db.$$nameQ$$();
       

        req.body._id = new$$nameQ$$._id;

        //new$$nameQ$$.title = req.body.title;
        $$schema$$

        new$$nameQ$$.save();

        io.sockets.emit('$$name$$::create', new$$nameQ$$);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/$$name$$/:id', function(req, res) {
        console.log('$$nameQ$$s put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.$$name$$.get$$nameQ$$ById(id, function (new$$nameQ$$) {

        //new$$nameQ$$.title = req.body.title;
            $$schema$$            

            new$$nameQ$$.save();

            io.sockets.emit('$$name$$::update', new$$nameQ$$);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/$$name$$/:id', function(req, res) {
        console.log('$$nameQ$$s delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.$$name$$.get$$nameQ$$ById(id, function (new$$nameQ$$) {
            io.sockets.emit('notifications', '');

            new$$nameQ$$.remove();

            io.sockets.emit('$$name$$::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};