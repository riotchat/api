import { ChannelID, UserID, GroupID, Channel } from './channels';

export type UserIdentifier = '@me' | number;

export type Status = 'online' | 'away' | 'busy' | 'offline';

export enum Activity {
	None,
	Custom,
	Playing
};

export interface UserActivity {
	type: Activity
	custom?: string
};

export type FriendType = 'unknown' | 'pending' | 'incoming' | 'active' | 'self';

/**
 * Get basic user information including profile
 * @method GET
 * @path /users/[UserID]
 * @requires authentication
 * @shouldbe self mutual friend
 */
export interface User {
	/* Internal user id */
	id: UserID
	/* Public username */
	username: string
	/* Date of creation */
	createdAt: number
	/* Email */
	email?: string

	/* User profile status */
	status: Status
	/* User's current activity */
	activity: {
		/* Type of activity */
		type: Activity
		/* String to display as activity */
		custom: string
	}
	/* User's profile picture */
	avatarURL: string

	/* Relationship to user */
	relation: FriendType
};

/**
 * Get group information
 * @method GET
 * @path /users/@me/group/[GroupID]
 * @requires authentication
 * @shouldbe member
 */
export interface Group {
	/* Group id */
	id: GroupID
	/* Date of creation */
	createdAt: number
	/* Group title */
	title: string
	/* Group icon */
	avatarURL: string

	/* Owner id */
	owner: UserID
	/* Members */
	members: UserID[]

	/* Group channel */
	channel: Channel
};
 
/**
 * Update user
 * @method PUT
 * @path /users/@me
 * @param* User Object
 * @param username
 * @param email
 * @param status
 * @param activity
 * @param avatarURL
 * @requires authentication
 */
export type UpdateUser = User;

/**
 * Get DM channels.
 * @method GET
 * @path /users/@me/channels
 * @query sync
 * @requires authentication
 */
export type GetDMs = (ChannelID | Channel)[];

/**
 * Get groups.
 * @method GET
 * @path /users/@me/groups
 * @query sync
 * @requires authentication
 */
export type GetGroups = (GroupID | Group)[];

/**
 * Creates a DM conversation with the target user, returns an existing channel if one exists
 * @method POST
 * @path /users/@me/channels
 * @param recipient
 * @requires authentication
 * @canfail
 * @shouldbe friend
 */
export interface CreateDM {
	/* DM channel id */
	id: string
};

/**
 * Get user's friends
 * @method GET
 * @path /users/@me/friends
 * @query sync
 * @requires authentication
 */
export type Friends = ({
	/* A friend's id */
	user: string
	/* Relation of user to self */
	type: FriendType
} | /* Returns user object if sync on */ User)[];

/**
 * Add someone as a friend
 * Accept a friend request
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
 * Remove someone as a friend
 * Deny a friend request
 * @method DELETE
 * @path /users/@me/friends/:id
 * @requires authentication
 * @canfail
 */
export interface RemoveFriend {
	/* Relation after removal */
	status: FriendType
};