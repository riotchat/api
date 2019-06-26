export type UserIdentifier = '@me' | number;

export type Status = 'online' | 'away' | 'busy' | 'invisible' | 'offline';

/**
 * Get basic user information including profile
 * @method GET
 * @path /users/[UserIdentifier]
 * @requires authentication
 */
export interface User {
	id: string,
	username: string,	
	email?: string,

	status: Status,
	avatarURL: string
};

/**
 * Get DM channels.
 * @method GET
 * @path /users/@me/channels
 * @requires authentication
 * @canfail
 */
export type GetDMs = {
	id: string,
	user: string
}[];

/**
 * Creates a DM conversation with the target user, returns an existing channel if one exists
 * @method POST
 * @path /users/@me/channels
 * @param recipient
 * @requires authentication
 * @canfail
 */
export interface CreateDM {
	id: string
};

//export in