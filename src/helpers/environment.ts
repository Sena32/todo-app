import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot();

const PORT = process.env.API_PORT;
interface IDataBase {
    host: string
    port: number
    user: string
    name: string
    pass: string
}
const DB:IDataBase = {
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    user:process.env.DB_USER,
    name:process.env.DB_NAME,
    pass:process.env.DB_PASSWORD
};




export {
    PORT,
    DB
}