import { writable } from 'svelte/store';

export const userStore = writable({
  username: undefined,
  password: undefined,
  type: undefined
});