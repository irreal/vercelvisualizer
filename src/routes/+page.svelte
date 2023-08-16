<script>
	import { events } from '../lib/event.store';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>These are the events:</p>
		<ul>
			{#each $events as event}
				<li>
					<div>
						<h2>{event.repo}</h2>
						<h3>{event.commitMessage}</h3>
						<p>{event.eventType}</p>
						<p>Author: {event.author}</p>
						<img src={event.avatarUrl} alt={event.author} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
