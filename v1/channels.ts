export type ChannelID = string;

export type MessageID = string;

export enum ChannelType {
	DM = 0,
	GROUP = 1,
	GUILD = 2
};

export interface Message {
	id: string
	content: string

	createdAt: number
	updatedAt: number

	author: string
	channel: string
};

/**
 * Get channel information
 * @method GET
 * @path /channels/[ChannelID]
 * @requires authentication
 */
export type Channel = {
	id: ChannelID
} & (
	{
		type: ChannelType.DM
		users: [string, string]
	} |
	{
		type: ChannelType.GROUP
		group: string
		description: string
	} |
	{
		type: ChannelType.GUILD
		guild: string
		description: string
	}
);

/**
 * Get messages from a channel
 * @method GET
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 */
export type GetMessages = Message[];

/**
 * Post a message to a channel
 * @method POST
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 */
export interface SendMessage {
	id: MessageID
};

/**
 * Edit a message
 * @method POST
 * @path /channels/[ChannelID]/messages/[MessageID]
 * @requires authentication
 */
export interface EditMessage {
	updatedAt: number
};