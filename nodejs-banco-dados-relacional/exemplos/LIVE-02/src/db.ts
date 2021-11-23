import { Pool } from "pg";

const connectionString = 'postgres://efminiux:LonG6_WVhyxCjDJJDMRcIDmL5zyYVFnt@kesavan.db.elephantsql.com/efminiux';

const db = new Pool({ connectionString });

export default db;