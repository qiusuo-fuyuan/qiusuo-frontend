export default interface SocialUser {
  provider: string;
  profile: {
    userId: string;
    name: string;
    firstName?: string;
    lastName?: string;
    email: string;
    avatarUrl: string;
  };
}