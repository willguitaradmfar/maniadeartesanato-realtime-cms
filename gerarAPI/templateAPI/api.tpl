module.exports = function(app, config, db, query) {
   
    app.post('/$$name$$', function(req, res) {
        console.log('$$nameQ$$s posts');
        console.log(req.body);        

        var new$$nameQ$$ = new db.$$nameQ$$();

        req.body.content = req.body.content.replace(/<script>.*<\/script>/gi, "");

        req.body._id = new$$nameQ$$._id;

        //new$$nameQ$$.title = req.body.title;
        $$schema$$

        new$$nameQ$$.save();

        io.sockets.emit('$$name$$::create', new$$nameQ$$);
        io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green padding_small"><div>' + new$$nameQ$$.title + '</div> created by <strong>' + req.user.username + '</strong></div>');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/$$name$$/:id', function(req, res) {
        console.log('$$nameQ$$s put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        req.body.content = req.body.content.replace(/<script>.*<\/script>/gi, "");

        query.get$$nameQ$$ById(id, function (new$$nameQ$$) {

        //new$$nameQ$$.title = req.body.title;
            $$schema$$            

            new$$nameQ$$.save();

            io.sockets.emit('$$name$$::update', new$$nameQ$$);
            io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green padding_small"><div>' + new$$nameQ$$.title + '</div> <strong>updated</strong></div>');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/$$name$$/:id', function(req, res) {
        console.log('$$nameQ$$s delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.get$$nameQ$$ById(id, function (new$$nameQ$$) {
            io.sockets.emit('notifications', '<div class="bck b_red_light text color c_red padding_small"><div>' + new$$nameQ$$.title + '</div> <strong>removed</strong></div>');

            new$$nameQ$$.remove();

            io.sockets.emit('$$name$$::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};