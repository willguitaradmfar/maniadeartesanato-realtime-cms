var config = {
    domain: {
        host: process.env.host,
        port: ''
    },
    env: 'dev', // dev or prod
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'blogio'
    },
    twitter: {
        consumerKey: process.env.consumerKey,
        consumerSecret: process.env.consumerSecret
    },
    public: {
        blogName: 'Mania de Artesanato',
        blogDescription: 'Márcia Braga',
        api: {
            articles: '/articles',
            articlesPublished: '/articlespublished',
            users: '/users'
        },
        url: {
            authTwitter: '/auth/twitter',
            authTwitterCallback: '/auth/twitter/callback',
            admin: '/admin',
            blog: ''
        }
    }
};

module.exports = config;
