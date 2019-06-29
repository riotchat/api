export interface Error {
	type: 'error',
	error: string
};

export interface MessageCreate {
	type: 'messageCreate',
	id: string,
	content: string,
	author: string,
	channel: string
};

export interface Authenticated {
	type: 'authenticated'
};

export type Packets = Error | MessageCreate | Authenticated;

export interface Authenticate {
	type: 'authenticate',
	token: string
};

export type ClientPackets = Error | Authenticate;