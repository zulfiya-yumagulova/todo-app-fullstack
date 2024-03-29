import pg from "pg";
import dotenv from "dotenv";
import * as config from "../config.js";
dotenv.config();
// console.log("Env Var", config.user);

// Connecting server with database
const pool = new pg.Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
