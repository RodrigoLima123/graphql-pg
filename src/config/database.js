const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex



// CRIAR //

// knex('users').insert({
//     name: 'Rafael',
//     email: 'rafael@gmail.com',
//     password: 'rd123'
// }).then(data => console.log(data))


// knex('users').select('*').then(resultado => console.log(resultado))