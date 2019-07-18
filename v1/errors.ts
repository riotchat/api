export enum APIError {
    /**
     * CATCH-ALL
     */
    FAIL = 0x1
    /**
     * AUTHENTICATION ERRORS
     */
};

const ERRORS: { [key in APIError]: [number, string] } =
{
    [0x1]: [500, 'Unknown error occurred!']
};

export function GetError(error: APIError) {
    return ERRORS[error];
}