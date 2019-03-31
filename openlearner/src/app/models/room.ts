import { User } from './user';
import { SubChannel } from './subchannel';

export interface Room {
    id: number;
    title: string;
    summary: string;
    channels: SubChannel[];
    users: User[]
}
