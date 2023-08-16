import { writable } from 'svelte/store';
import type { Event } from './event.type';

export const events = writable<Event[]>([]);
