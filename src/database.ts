import { createPool, Pool } from "mysql2/promise";

export async function connect(): Promise<Pool> {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "130120130",
    database: "node_type_mysql",
    connectionLimit: 20,
  });
  return connection;
}
