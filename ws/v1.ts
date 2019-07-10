import { FriendType, Status } from '../v1/users';
import { Message as IMessage } from '../v1/channels';

export interface Error {
	type: 'error',
	error: string
};

export interface Pong {
	type: 'pong'
};

export interface Message extends IMessage {
	type: 'message'
};

export interface Authenticated {
	type: 'authenticated'
};

export interface UserUpdate {
	type: 'userUpdate'
	user: string

	status?: Status
	avatarURL?: string
	relation?: FriendType
}

export type Packets = Error | Pong | Message | Authenticated | UserUpdate;

export interface Ping {
	type: 'ping'
};

export interface Authenticate {
	type: 'authenticate',
	token: string
};

export type ClientPackets = Error | Ping | Authenticate;