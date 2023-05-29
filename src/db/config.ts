import { TypeOrmModule } from "@nestjs/typeorm";
import {DB} from "src/helpers/environment";

const connectionDb = TypeOrmModule.forRoot({
    type: 'postgres',
    port: DB.port,
    host: DB.host,
    username: DB.user,
    password: DB.pass,
    database: DB.name,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsRun: false,
    migrationsTableName: 'history',
    synchronize: true,
  });

  export default connectionDb;