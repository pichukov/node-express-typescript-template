import {ILogger} from '../services/logService';

export class MyController {

    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }
}
