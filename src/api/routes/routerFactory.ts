import {Router} from 'express';
import {ILogger} from '../services/logService';
import {MyRoute} from './myRoute';

export interface IAbstractRoute {}

export class RouterFactory {

    public static routes: IAbstractRoute[] = [];

    public static createRoutes(router: Router, logger: ILogger) {
        RouterFactory.routes.push(new MyRoute(router, logger));
    }
}
