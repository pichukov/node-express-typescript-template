import * as bodyParser from 'body-parser';
import express from 'express';
import {RouterFactory} from './api/routes/routerFactory';
import {ILogger} from './api/services/logService';

export class App {

    public app: express.Application;

    constructor(logger: ILogger) {
        this.app = express();
        this.config();
        this.routes(logger);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Headers for test project
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ' +
                'Authorization, Access-Control-Allow-Credentials, Access-Control-Allow-Origin');
            res.header('Access-Control-Max-Age', '86400');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }

    private routes(logger: ILogger) {
        const router = express.Router();
        RouterFactory.createRoutes(router, logger);
        this.app.use(router);
    }
}
