import { UserProfile } from './userprofile';

export class User {
    id: number;
    username: string;
    token: string;
    refreshToken: string;
    email:string;
    status?: string;
    profile?: UserProfile;
    imageUrl?: string;
}