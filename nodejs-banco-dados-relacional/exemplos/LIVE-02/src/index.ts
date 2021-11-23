import express from 'express';
import errorHandler from './middlewares/error.handdler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configurações de rotas
app.use(usersRoute);
app.use(statusRoute);

// configuração dos handlers de erro
app.use(errorHandler);

// inicialização do servidor
app.listen(3000, () => {
    console.log('App execution in port 3000 !!!!!!');
});