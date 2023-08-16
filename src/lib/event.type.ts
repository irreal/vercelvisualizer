export type Event = {
	author: string;
	avatarUrl: string;
	repo: string;
	commitMessage: string;
	eventType: 'created' | 'error' | 'cancelled' | 'succeeded';
};
