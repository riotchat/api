export interface MessageCreate {
	type: 'messageCreate',
	id: string,
	content: string,
	author: string,
	channel: string
};

export type Packets = MessageCreate;