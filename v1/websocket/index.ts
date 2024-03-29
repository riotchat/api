import { FriendType, Status, Activity } from '../api/users';
import { Message as IMessage } from '../api/channels';

export interface Error {
	type: 'error',
	error: string
};

export interface Ping {
	type: 'ping'
};

export interface Pong {
	type: 'pong'
};

export type CommonPackets = Error | Ping | Pong;

export interface Message extends IMessage {
	type: 'message',
	nonce?: string
};

export interface Authenticated {
	type: 'authenticated'
};

export interface UserUpdate {
	type: 'userUpdate'
	user: string

	status?: Status
	activity?: {
		type: Activity
		custom?: string
	}
	avatarURL?: string
	relation?: FriendType
}

export type Packets = CommonPackets | Message | Authenticated | UserUpdate;

export interface Authenticate {
	type: 'authenticate',
	token: string
};

export type ClientPackets = CommonPackets | Authenticate;