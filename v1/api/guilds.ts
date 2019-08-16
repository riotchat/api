import { UserID, Channel } from "./channels";

type GuildID = string;

/**
 * Get guild information
 * @method GET
 * @path /guilds/[GuildID]
 * @requires authentication
 * @canfail
 */
export interface Guild {
	/* Returns channel id for validation */
	id: GuildID
	/* When the guild was created (UTC+0) */
	createdAt: number
	/* Guild icon */
	iconURL: string
	/* Guild name */
	name: string
	/* Owner's user ID */
	owner: UserID
	/* Guild channels */
	channels: Channel[]
};

/**
 * Create a guild
 * @method POST
 * @path /guilds/create
 * @param name Guild name
 * @requires authentication
 */
export interface CreateGuild {
	id: GuildID
};

/**
 * Get guilds.
 * @method GET
 * @path /list
 * @query sync
 * @requires authentication
 */
export type GetGuilds = (GuildID | Guild)[];

/**
 * Create a guild channel
 * @method POST
 * @path /guilds/:id/channels
 * @param name Channel name
 * @requires authentication
 */
export type CreateChannel = Channel;