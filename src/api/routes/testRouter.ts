import {Request, Response, Router} from 'express';
import {TestController} from '../controllers/testController';
import {ErrorObject} from '../models/error';
import {IAbstractRoute} from './routerFactory';

export class TestRouter implements IAbstractRoute {

    private testController: TestController;

    constructor(router: Router) {
        this.testController = new TestController();
        router.post('/api/test', this.testAction);
    }

    private testAction = (req: Request, res: Response) => {
        this.testController.testAction(req.body, (error) => {
            if (error) {
                res.status(500);
                res.json(new ErrorObject(error));
            } else {
                res.status(200);
                res.json(req.body);
            }
        });
    }
}
