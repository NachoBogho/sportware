export const successResponse = (data: any, message: string = 'Success') => {
    return {
        status: 'success',
        message,
        data,
    };
};

export const errorResponse = (message: string, code: number = 400) => {
    return {
        status: 'error',
        message,
        code,
    };
};

export const notFoundResponse = (message: string = 'Resource not found') => {
    return errorResponse(message, 404);
};

export const validationErrorResponse = (errors: string[]) => {
    return {
        status: 'validation_error',
        message: 'Validation failed',
        errors,
    };
};