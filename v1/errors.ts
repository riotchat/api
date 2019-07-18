export enum APIError {
    /**
     * GENERAL ERRORS
     */
    FAIL = 0x0,
    MISSING_FIELDS = 0x1,
    /**
     * AUTHENTICATION ERRORS
     */
    INVALID_EMAIL = 0x10,
    INVALID_PASSWORD = 0x11,
    INVALID_2FA = 0x12
};

const ERRORS: { [key in APIError]: [number, string] } =
{
    // GENERAL ERRORS
    [0x0]: [500, 'Unknown error occurred!'],
    [0x1]: [422, 'Missing fields.'],
    // AUTH ERRORS
    [0x10]: [403, 'Invalid email.'],
    [0x11]: [403, 'Invalid password.'],
    [0x12]: [403, 'Failed to verify 2FA.']
};

export function GetError(error: APIError) {
    return ERRORS[error];
}

export function SendError(res, error: APIError, details?: string) {
    let [ status, reason ] = GetError(error);
    res.status(status);
    res.send({ error, reason, details });
}