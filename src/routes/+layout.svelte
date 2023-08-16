<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import supabase from '$lib/supabase';
	import { events } from '$lib/event.store';

	const channel = supabase.channel('deployments');
	channel
		.on('broadcast', { event: 'deployment' }, (event) => {
			events.update((state) => [...state, event.payload as any]);
		})
		.subscribe();
</script>

<slot />
