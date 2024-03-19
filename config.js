// config.js
module.exports = {
    backendUrl: 'https://movie-journal.sayed-arafat.eu.org'
};

const config = {
    backendUrl: 'https://movie-journal.sayed-arafat.eu.org',
    cors: {
        allowOrigins: 'http://localhost:3000',
        allowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
        allowHeaders: 'Content-Type, Authorization'
    }
};