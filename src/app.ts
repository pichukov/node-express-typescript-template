import * as bodyParser from 'body-parser';
import express from 'express';
import {RouterFactory} from './api/routes/routerFactory';

export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes() {
        const router = express.Router();
        RouterFactory.createRoutes(router);
        this.app.use(router);
    }
}

export default new App().app;
