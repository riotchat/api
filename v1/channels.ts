type ChannelID = string;

enum ChannelType {
	DM = 0,
	GROUP = 1,
	GUILD = 2
};

/**
 * Get channel information
 * @method GET
 * @path /channels/[ChannelID]
 * @requires authentication
 */
export type Channel = {
	id: string,
	description: string
} & (
	{
		type: ChannelType.DM,
		users: [string, string]
	} |
	{
		type: ChannelType.GROUP,
		group: string
	} |
	{
		type: ChannelType.GUILD,
		guild: string
	}
);

/**
 * Get messages from a channel
 * @method GET
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 */
export type GetMessages = {
	id: string,
	content: string,
	author: string,
	channel: string
}[];

/**
 * Post a message to a channel
 * @method POST
 * @path /channels/[ChannelID]/messages
 * @requires authentication
 */
export interface SendMessage {
	id: string
};