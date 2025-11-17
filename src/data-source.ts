import {DataSource} from "typeorm"

export const AppDataSource = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "root",
    database : "typeorm_db",
    entities : ["src/entity/*{.ts,.js}"],
    synchronize : true, // sync entities with tables of database
    logging : true
})


