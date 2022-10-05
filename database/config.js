const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'alfiano_backend_2',
    port: 5432,
    password: 'alfi1505'
})

module.exports = databaseConfig