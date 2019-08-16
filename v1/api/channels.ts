export type ChannelID = string;
export type GroupID = string;
export type MessageID = string;
export type UserID = string;

export enum ChannelType {
	DM = 0,
	GROUP = 1,
	GUILD = 2
};

/**
 * Get a message
 * @method GET
 * @path /channels/[ChannelID]/messages/[MessageID]
 * @requires authentication
 */
export interface Message {
	/* Message id */
	id: string
	/* String contents, supports unicode */
	content: string

	/* Unix timestamp of when the message was created (UTC+0) */
	createdAt: number
	/* Unix timestamp of when the message was last edited (UTC+0) */
	updatedAt: number

	/* User id of the author */
	author: UserID
	/* Id of the channel */
	channel: ChannelID
};

/**
 * Get channel information
 * @method GET
 * @path /channels/[ChannelID]
 * @requires authentication
 * @canfail
 */
export type Channel = {
	/* Returns channel id for validation */
	id: ChannelID
} & (
	{
		type: ChannelType.DM
		users: [UserID, UserID]
	} |
	{
		type: ChannelType.GROUP
		group: string
		description: string
	} |
	{
		type: ChannelType.GUILD
		guild: string
		name: string
		description: string
	}
);

/**
 * Delete a guild channel
 * Close a direct message
 * Leave a group channel
 * @method DELETE
 * @path /channels/[ChannelID]
 * @requires authentication
 * @canfail
 */
export interface DeleteChannel { };

/**
 * Get messages from a channel
 * @method GET
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 * @canfail
 */
export type GetMessages = Message[];

/**
 * Post a message to a channel
 * @method POST
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 */
export interface SendMessage {
	/* Id of the sent message */
	id: MessageID
};

/**
 * Edit a message
 * @method POST
 * @path /channels/[ChannelID]/messages/[MessageID]
 * @requires authentication
 */
export interface EditMessage {
	/* New edit unix timestamp (UTC+0) */
	updatedAt: number
};

/**
 * Delete a message
 * @method DELETE
 * @path /channels/[ChannelID]/messages/[MessageID]
 * @requires authentication
 */
export interface DeleteMessage { };

/**
 * Add recipient to a DM
 * Converts DM to group DM
 * @method POST
 * @path /channels/[ChannelID]/recipients
 * @param recipients[]
 * @requires authentication
 * @canfail
 */
export interface AddRecipient {
	/* Returns channel id of group DM */
	id: ChannelID
};