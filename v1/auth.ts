/**
 * Used to authenticate a user and to get the access token
 * @method POST
 * @path /auth/authenticate
 * @param email
 * @param password
 * @canfail
 */
interface Authenticate {
	/* Data below will exist if false, otherwise continue down 2FA path */
	do2FA: false | string
	/* Username for welcome strings while app loads */
	username?: string
	/* Access token for further API requests */
	accessToken?: string
};

/**
 * Used to finish authentication using 2FA
 * @method POST
 * @path /auth/2fa
 * @param token
 * @param code
 * @canfail
 */
interface Authenticate2FA {
	/* Username for welcome strings while app loads */
	username: string
	/* Access token for further API requests */
	accessToken: string
};

/**
 * Used to verify that an access token is valid
 * @method POST
 * @path /auth/token/verify
 * @param accessToken
 */
interface VerifyToken {
	/* Whether the token is valid */
	valid: boolean
};

/**
 * Used to generate a new access token and deauth all other devices
 * @method POST
 * @path /auth/token
 * @param accessToken
 * @canfail
 */
interface RefreshToken {
	/* New access token, replace the old one locally */
	accessToken: string
};

/**
 * Used to remove access token completely and generate on next login
 * @method DELETE
 * @path /auth/token
 * @param accessToken
 */
interface RemoveToken {
	/* Whether the token has been removed */
	success: boolean
};

/**
 * Register a new user on the platform
 * @method POST
 * @path /auth/create
 * @param email
 * @param password
 * @param username
 * @param redirectURI
 * @canfail
 */
interface UserCreation {
	accessToken: string
};

/**
 * Verify a user (path sent by email)
 * @method GET
 * @path /auth/verify
 * @param code
 */
interface EmailVerify {
	redirectsTo: 'https://riotchat.gq/verified'
};