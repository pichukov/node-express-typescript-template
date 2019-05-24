import {Logger} from 'ts-log-debug';

export interface ILogger {
    info(message: string): void;
    error(message: string): void;
}

export class LogService implements ILogger {

    private logger: Logger;

    constructor() {
        this.logger = new Logger('Ngp Orange Box Service');
        this.logger.appenders
            .set('std-log', {
                type: 'stdout',
                levels: ['debug', 'info', 'trace']
            })
            .set('error-log', {
                type: 'stderr',
                levels: ['fatal', 'error', 'warn']
            })
            .set('all-log-file', {
                type: 'file',
                filename: 'ngp_orange_box_service.log',
                levels: ['debug', 'info', 'trace']
            })
            .set('error-log-file', {
                type: 'file',
                filename: 'ngp_orange_box_service_error.log',
                levels: ['fatal', 'error', 'warn']
            });
    }

    public info(message: string) {
        this.logger.info(message);
    }

    public error(message: string) {
        this.logger.error(message);
    }
}
