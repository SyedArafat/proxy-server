const config = {
    backendUrl: 'https://movie-journal.sayed-arafat.eu.org',
    cors: {
        allowOrigins: 'http://localhost:3000',
        allowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
        allowHeaders: 'Content-Type, Authorization'
    }
};

module.exports = config;