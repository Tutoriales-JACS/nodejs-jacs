import { config } from "dotenv";

config();

export default {
    MONGO_DB : process.env.MONGODB_URI || 'mongodb://localhost:27017/tareas-api',
    PORT : process.env.PORT || 3000,
    ENTORNO: process.env.ENTORNO || 'dev',
}