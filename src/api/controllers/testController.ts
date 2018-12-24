import {TestModel} from '../models/testModel';

export class TestController {

    public testAction(record: TestModel, callback: (error: string) => void) {
        callback(null);
    }
}
