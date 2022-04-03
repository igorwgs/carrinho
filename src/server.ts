import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("Servidor em execução");
} );