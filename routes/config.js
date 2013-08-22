var config = {
    domain: {
        host: 'http://localhost',
        port: '3005'
    },
    env: 'dev', // dev or prod
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'blogio'
    },
    twitter: {
        consumerKey: 'qdJy5WxPRoROnhm4fPSTmQ',
        consumerSecret: 'CHcINdZU9WMu4JwBitrd41upVgJwXoyardykmjdO4Bk'
    },
    public: {
        blogName: 'postit',
        blogDescription: 'Small lightweight and real-time system blogging',
        api: {
            articles: '/articles',
            articlesPublished: '/articlespublished',
            users: '/users'
        },
        url: {
            authTwitter: '/auth/twitter',
            authTwitterCallback: '/auth/twitter/callback',
            admin: '/admin',
            blog: '/blog'
        }
    }
};

module.exports = config;