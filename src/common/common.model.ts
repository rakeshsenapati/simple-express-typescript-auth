export class CommonResponse {
    success: boolean;
    message: string;
    data: any;
    constructor(message = '', data: any = null, success = true) {
        this.success = success
        this.message = message
        if (data) {
            this.data = data
        }
    }
}

export class ErrorResponse extends CommonResponse {
    constructor(message: string) {
        super(message, null, false)
    }
}

