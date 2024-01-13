import knex from "knex";
import path from "path";

const connection = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    userNullAsDefault: true,
};

export default connection