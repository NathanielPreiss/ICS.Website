import type { PageLoad } from './$types';
import { refreshAuthStore } from '$lib/services/auth';

// This is disabled because Auth0 
export const ssr = false;

export const load: PageLoad = async ({ data }) => {
	// Initialize the page, including the user's Auth0
	await refreshAuthStore();

	return { ...data };
};
