const password = require("./pass1.js");
const Pool = require("pg").Pool
const pool = new Pool({
    user:"postgres",
    password:password,
    host:"localhost",
    port:"5432",
    database:"todolist2",
});
module.exports = pool
