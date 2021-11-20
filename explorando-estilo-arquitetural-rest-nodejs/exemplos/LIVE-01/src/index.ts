import express, { Request, Response, NextFunction } from 'express';
import statusRoute from '.routes/statusRoute'; VERIFICAR ERRO
import usersRoute from './routes/users.route';

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configurações de rotas
app.use(usersRoute);
app.use(usersRoute);

// app.get('/status', (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).send({ foo: 'Sucesso!!!!!!!' });
// });




// inicialização do servidor
app.listen(3000, () => {
    console.log('App execution in port 3000 !!!!!!');
});