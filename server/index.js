import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dataRoutes from "./routes/data.js";
import dotenv from 'dotenv';

dotenv.config()

const app = express();

// var corsOptions = {
//     origin: ['https://r-kpop-server.onrender.com/charts/1Team'],
//     credentials: true,
// };

app.use(cors());

app.use('/data', dataRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true, dbName: "kpopDB" })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

