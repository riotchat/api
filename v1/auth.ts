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
	accessToken: string
};

/**
 * Verify a user (path sent by email)
 * @method GET
 * @path /auth/verify
 * @param code Verification code sent by email
 */
//export interface EmailVerify {
//	redirectsTo: 'https://riotchat.gq/verified'
//};