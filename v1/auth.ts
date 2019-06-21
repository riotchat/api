/**
 * Used to authenticate a user and to get the access token
 * @method POST
 * @path /auth/authenticate
 * @param email User's email address
 * @param password User's password
 * @canfail
 */
export type Authenticate = {
	/* 2FA is not enabled, user is authenticated */
	do2FA: false
	/* Username for welcome strings while app loads */
	username: string
	/* Access token for further API requests */
	accessToken: string
} | {
	/* 2FA is enabled, use two factor */
	do2FA: true,
	/* Two factor request token, used to call /auth/2fa to continue */
	token: string
};

/**
 * Used to finish authentication using 2FA
 * @method POST
 * @path /auth/2fa
 * @param token Token received from /authenticate
 * @param code 2FA code from authenticator
 * @canfail
 */
export interface Authenticate2FA {
	/* Username for welcome strings while app loads */
	username: string
	/* Access token for further API requests */
	accessToken: string
};

/**
 * Used to verify that an access token is valid
 * @method POST
 * @path /auth/token/verify
 * @param accessToken Account access token
 */
export interface VerifyToken {
	/* Whether the token is valid */
	valid: boolean
};

/**
 * Used to generate a new access token and deauth all other devices
 * @method POST
 * @path /auth/token
 * @requires authentication
 * @canfail
 */
export interface RefreshToken {
	/* New access token, replace the old one locally */
	accessToken: string
};

/**
 * Used to revoke access token completely and deauth all devices
 * @method DELETE
 * @path /auth/token
 * @requires authentication
 */
export interface RemoveToken {
	/* Whether the token has been removed */
	success: boolean
};

/**
 * Register a new user on the platform
 * @method POST
 * @path /auth/create
 * @param email Registration email
 * @param password Chosen password
 * @param username Chosen username
 * @param redirectURI URL to redirect to after registration
 * @canfail
 */
export interface UserCreation {
	/* Access token for the new account */
	accessToken: string
};

/**
 * Verify a user (path sent by email)
 * @method GET
 * @path /auth/verify
 * @param code Verification code sent by email
 */
export interface EmailVerify {
	redirectsTo: 'https://riotchat.gq/verified'
};