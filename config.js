const config = {
    backendUrl: 'https://movie-journal.sayed-arafat.eu.org',
    cors: {
        allowOrigins: 'https://movies-journal.web.app',
        allowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
        allowHeaders: 'Content-Type, Authorization'
    }
};

module.exports = config;