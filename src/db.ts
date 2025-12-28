import mysql from "mysql2/promise" ;
import "dotenv/config" ;

const {
  db_host,
  db_user,
  db_password,
  db_name,
  db_port
} = process.env ;

if(!db_host || !db_user || !db_name){
  throw new Error("salah cuy") ;
}

const poolConfig = {
  host: db_host,
  user: db_user,
  database: db_name,
  ...(db_password && { password: db_password }),
};

export const db = mysql.createPool(poolConfig);