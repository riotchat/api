export type UserIdentifier = '@me' | number;

export type Status = 'online' | 'away' | 'busy' | 'invisible' | 'offline';

export type FriendType = 'unknown' | 'pending' | 'incoming' | 'active' | 'self';

/**
 * Get basic user information including profile
 * @method GET
 * @path /users/[UserIdentifier]
 * @requires authentication
 */
export interface User {
	/* Internal user id */
	id: string
	/* Public username */
	username: string
	/* Email */
	email?: string

	/* User profile status */
	status: Status
	/* User's profile picture */
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
	/* Channel id  */
	id: string
	/* Recipient of DM */
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
	/* DM channel id */
	id: string
};

/**
 * Get user's friends
 * @method GET
 * @path /users/@me/friends
 * @requires authentication
 */
export type Friends = {
	/* A friend's id */
	user: string
	/* Relation of user to self */
	type: FriendType
}[];

/**
 * Add someone as a friend or accept an invite
 * @method POST
 * @path /users/@me/friends/:id
 * @requires authentication
 * @canfail
 */
export interface AddFriend {
	/* Relation after addition or sending invite */
	status: FriendType
};

/**
 * Remove someone as a friend or cancel request
 * @method DELETE
 * @path /users/@me/friends/:id
 * @requires authentication
 * @canfail
 */
export interface RemoveFriend {
	/* Relation after removal */
	status: FriendType
};