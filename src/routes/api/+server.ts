import type { RequestHandler } from './$types';
import supabase from '$lib/supabase';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const isDeployment = body.type.startsWith('deployment');
	if (!isDeployment) {
		return new Response();
	}
	const author = body.payload.deployment.meta.githubCommitAuthorLogin;
	const avatarUrl = `https://github.com/${author}.png`;
	const repo = body.payload.deployment.meta.githubCommitRepo;
	const commitMessage = body.payload.deployment.meta.githubCommitMessage;
	const eventType = body.type.replace('deployment.', '');

	const channel = supabase.channel('deployments');
	channel.subscribe((status) => {
		if (status === 'SUBSCRIBED') {
			channel.send({
				type: 'broadcast',
				event: 'deployment',
				payload: {
					author,
					avatarUrl,
					repo,
					commitMessage,
					eventType
				}
			});
		}
	});

	return new Response();
};
