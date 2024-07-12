import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
//Cria uma instância do aplicativo Express

app.use(express.json()); //Isso permite que o servidor Express faça requisições
app.use(cors()); //Isso permite que o servidor aceite requisições de outras origens 

app.use("/", userRoutes);
//define que qualquer requisição feita com '/' seja tratada pelas rotas definidas em userRoutes

app.listen(8800); //faz com que ele comece a escutar requisições na porta 8800