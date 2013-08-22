var config = {
    domain: {
        host: 'http://maniadeartesanato.com.br/',
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
<<<<<<< HEAD
        consumerKey: 'A11HEmPbDNGOzWlxHbVIw',
        consumerSecret: 'w02ihgnnhXJwd1r6mINyUV7NRNFi6lwccNT631UvA'
=======
        consumerKey: '6NFX5SIU3IiZYxcLfyGw5A',
        consumerSecret: 'Nx5VwraYF0b1pAOZa7Cy3RXN84Mk7jHBzCzo41GNg'
>>>>>>> 86c670cb937c4cd7d6fbb51a2277652526caeafb
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
