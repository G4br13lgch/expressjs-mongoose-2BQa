import express from 'express';
import dotenv from "dotenv";
import morgan from 'morgan';
import './helpers/crypto.helpers'
const app = express();
app.use(morgan('dev'));
dotenv.config();
var bodyParser = require("body-parser");
var cors = require("cors");

app.set("PORT", process.env.PORT || 3333)

import usuarios_routes from './routes/usuarios.routes'
import auth_routes from './routes/auth.routes.js'
import autos_routes from './routes/autos.routes'
import clientes_routes from './routes/clientes.routes'
import entradas_routes from './routes/entradas.routes'
import salidas_routes from './routes/salidas.routes'
import citas_routes from './routes/citas.routes'

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());
app.use((req, send, next) => {
    const replaceString = (object) => {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                typeof (element) == "object" && replaceString(element)
                typeof (element) == "string" && (object[key] = object[key].replace(/'/g, `''`))
            }
        }
    }
    replaceString(req.body);
    Math.round10 = function (num, decimalPlaces = 0) {
        num = Math.round(num + "e" + decimalPlaces);
        return Number(num + "e" + -decimalPlaces);

    }
    next();
})

//ROUTES

app.use('/usuarios/', usuarios_routes);
app.use('/auth/',auth_routes)
app.use('/autos/',autos_routes)
app.use('/clientes',clientes_routes)
app.use('/entradas',entradas_routes)
app.use('/salidas',salidas_routes)
app.use('/citas',citas_routes)
app.get("/", (req, res) => {
    res.json({ status: true, message: "Welcome to node js" });
})
export default app
