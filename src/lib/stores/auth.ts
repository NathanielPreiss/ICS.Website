// src/lib/stores/auth.ts
import { writable } from 'svelte/store';
import type { User } from '@auth0/auth0-spa-js';

const isAuthenticated = writable(false);
const user = writable<User | null>(null);
const idToken = writable<string | null>(null);
const popupOpen = writable(false);
const error = writable();
const testing = writable("testing123");

export { isAuthenticated, user, idToken, popupOpen, error, testing };
