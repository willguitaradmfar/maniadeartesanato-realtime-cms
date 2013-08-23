module.exports = function(app, config, db, query) {
    app.get('/medias', function(req, res) {
        if (req.media) {
            query.getMedias(function(medias) {
                res.send(medias);
            });
        } else {
            res.send(401, {status:"Unauthorized Medias"});
        }
    });

    app.post('/medias', function(req, res) {
        console.log('medias posts');
        console.log(req.body);
        console.log(req.media);

        var newMedia = new db.Media();

        req.body._id = newMedia._id;   

        newMedia.title = req.body.title;
        newMedia.description = req.media.description;        
        newMedia.category = req.body.category;        

        newMedia.save();

        io.sockets.emit('medias::create', newMedia);
        io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green bold">media created</div>');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/medias/:id', function(req, res) {
        console.log('medias put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getMediaById(id, function (media) {            

            media.save();

            io.sockets.emit('medias::update', media);
            io.sockets.emit('notifications', '<div class="bck b_green_light text color c_green bold">media updated</div>');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/medias/:id', function(req, res) {
        console.log('Medias delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.getMediaById(id, function (media) {
            io.sockets.emit('notifications', '<div class="bck b_red_light text color c_red padding_small"><div>' + media.medianame + '</div> <strong>removed</strong></div>');

            media.remove();

            io.sockets.emit('medias::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};