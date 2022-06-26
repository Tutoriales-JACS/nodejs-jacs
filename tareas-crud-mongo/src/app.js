/* 
* Configuraciones inicial de Express
*/
import express from "express";
import morgan from "morgan";
import config from "./config";
import indexRouter from "./routes/tareas.routes";
import cors from 'cors';

const app = express();

// run as service  in port
app.set('port', config.PORT || 3000);

/*   MIDDLEWARES */
// permite acceso desde cualquier servidor
const corsOptions = {}
app.use(cors(corsOptions))

// para ver peticiones
app.use(morgan(config.ENTORNO));

// for util object json in express
app.use(express.json());

// para las peticiones como forms HTML
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
    res.send('Inicio');
})

// rutas
app.use('/api/tareas', indexRouter);

export default app;