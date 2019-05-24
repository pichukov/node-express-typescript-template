import {ILogger} from '../../api/services/logService';

export class MockLogService implements ILogger {

    public error(message: string): void {}

    public info(message: string): void {}

}
