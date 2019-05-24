import {LogService} from './api/services/logService';
import {App} from './app';

const PORT = 3000;
const logger = new LogService();

new App(logger).app.listen(PORT, () => {
    console.log(`The app listening on port ${PORT}`);
});
