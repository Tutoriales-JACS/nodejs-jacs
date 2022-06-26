import mongoose from 'mongoose';
import config from './config';

(async ()=>{
    try {
        const db =  await mongoose.connect(config.MONGO_DB);
        console.log('Conectado a BD: ',db.connection.name);
    } catch (error) {
        console.log(error);
    }
   
})();
