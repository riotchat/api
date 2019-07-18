export enum APIError {
    /**
     * GENERAL ERRORS
     */
    FAIL = 0x0,
    MISSING_FIELDS = 0x1,
    NO_ERROR = 0x2,
    /**
     * AUTHENTICATION ERRORS
     */
    INVALID_EMAIL = 0x10,
    INVALID_PASSWORD = 0x11,
    INVALID_2FA = 0x12,
    /**
     * CLIENT-SIDE ERRORS
     */
    CONNECTION_FAILED = 0xF0,
    NO_CLIENT_ERROR = 0xF1,
};

const ERRORS: { [key in APIError]: [number, string] | string } =
{
    // GENERAL ERRORS
    [0x0]: [500, 'Unknown error occurred!'],
    [0x1]: [422, 'Missing fields.'],
    [0x2]: [0, 'There is no error.'],
    // AUTH ERRORS
    [0x10]: [403, 'Invalid email.'],
    [0x11]: [403, 'Invalid password.'],
    [0x12]: [403, 'Failed to verify 2FA.'],
    // CLIENT ERRORS
    [0xF0]: 'Failed to connect.',
    [0xF1]: 'There is no error.'
};

export function GetError(error: APIError) {
    return ERRORS[error];
}

export function SendError(res: any, error: APIError, details?: string) {
    let [ status, reason ] = GetError(error);
    res.status(status);
    res.send({ error, reason, details });
}

export type ErrorObject = { error: APIError, reason: string, details?: string };
export function ClientError(error: APIError, details?: string): ErrorObject {
    let reason = GetError(error) as string;
    return { error, reason, details };
}