import {Router} from 'express';
import {TestRouter} from './testRouter';

export interface IAbstractRoute {}

export class RouterFactory {

    public static routes: IAbstractRoute[] = [];

    public static createRoutes(router: Router) {
        RouterFactory.routes.push(new TestRouter(router));
    }
}
