const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "punit",
    database: "demo"
})
client.connect();

module.exports = client;