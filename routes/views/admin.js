module.exports = function(app, config, passport) {
    app.get(config.public.url.admin, function(req, res) {
        console.log(req.user);

        res.render('administrator/index', {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });

    app.get(config.public.url.admin + config.public.api.articles, function(req, res) {
        console.log(req.user);

        res.render('administrator/index', {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });

    app.get(config.public.url.admin + config.public.api.articles + '/:id', function(req, res) {
        console.log(req.user);

        res.render('administrator/index', {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });

    app.get(config.public.url.admin + config.public.api.users, function(req, res) {
        console.log(req.user);
        
        res.render('administrator/index', {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });

    app.get(config.public.url.admin + config.public.api.users + '/:id', function(req, res) {
        console.log(req.user);
        
        res.render('administrator/index', {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });

    app.get(config.public.url.admin + '/partials/:page', function(req, res) {
        console.log(req.user);
        
        res.render('administrator/partials/'+req.params.page, {
            title: 'Postit administrator',
            env: config.env,
            session: req.user
        });
    });
};