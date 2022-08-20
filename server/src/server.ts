import express from "express";
import cors from "cors";

import { routes } from "./routes";

const app_port = process.env.PORT || 3333;
const app = express();

app.use(cors()); 
app.use(express.json({ limit: "50mb" }));
app.use(routes);

app.listen(app_port, () => console.log(`HTTP server running!`));