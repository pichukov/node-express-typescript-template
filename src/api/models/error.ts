export enum ErrorCode {
    None = 0
}

export class ErrorObject {
    constructor(
        public message: string,
        public errorCode: ErrorCode
    ) {}
}
