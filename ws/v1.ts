import { FriendType } from '../v1/users';
import { Message } from '../v1/channels';

export interface Error {
	type: 'error',
	error: string
};

export interface MessageCreate extends Message {
	type: 'messageCreate'
};

export interface Authenticated {
	type: 'authenticated'
};

export interface UserUpdate {
	type: 'userUpdate'
	user: string

	avatarURL?: string
	relation?: FriendType
}

export type Packets = Error | MessageCreate | Authenticated | UserUpdate;

export interface Authenticate {
	type: 'authenticate',
	token: string
};

export type ClientPackets = Error | Authenticate;