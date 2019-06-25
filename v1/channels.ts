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
	id: number,
	description: string
} & (
	{
		type: ChannelType.DM,
		users: [number, number]
	} |
	{
		type: ChannelType.GROUP,
		group: number
	} |
	{
		type: ChannelType.GUILD,
		guild: number
	}
);