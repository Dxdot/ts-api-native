import mysql from "mysql2/promise" ;

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "fahmi144",
  database: "my_api_crud"
}) ;