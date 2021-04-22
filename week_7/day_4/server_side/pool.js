const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Brody0865!",
  host: "localhost",
  port: 5432,
  database:"homework",
});

module.exports = pool;