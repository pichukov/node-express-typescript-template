import {Request, Response, Router} from 'express';
import {MyController} from '../controllers/myController';
import {ErrorCode, ErrorObject} from '../models/error';
import {ILogger} from '../services/logService';
import {IAbstractRoute} from './routerFactory';

export class MyRoute implements IAbstractRoute {

    private myController: MyController;
    private logger: ILogger;

    constructor(router: Router, logger: ILogger) {
        this.logger = logger;
        this.myController = new MyController(logger);
        router.get('/api/call', this.myAction);
    }

    private myAction = (req: Request, res: Response) => {
        res.statusCode = 500;
        res.json(new ErrorObject('Not implemented', ErrorCode.None));
    }
}
