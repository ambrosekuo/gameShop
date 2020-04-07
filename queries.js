const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'Database2',
  password: 'a',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    })
  }



  module.exports = {
    getUsers,
  };