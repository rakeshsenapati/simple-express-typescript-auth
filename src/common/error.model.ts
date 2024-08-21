export class AppError extends Error {
    status: number;
    isOperational: boolean;
    constructor(message: string, status: number, isOperational = true) {
        super(message);
        this.status = status; // HTTP status code
        this.isOperational = isOperational; // For dev vs prod differentiation

        // Capture stack trace for debugging (optional)
        Error.captureStackTrace(this, this.constructor);
    }
}
