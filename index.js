import express from "express";
import SetUpDatabase from './src/config/database';
import Routes from './src/routes/employee';

const app = express();

SetUpDatabase().then((db) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    app.use(Routes(db));

    app.listen(3000, () => {
        console.log(`server listening at http://localhost:${3000}`)
    });
}).catch((err) => {
    console.log(err)
});

