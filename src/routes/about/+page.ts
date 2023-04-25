import { dev } from '$app/environment';
import type { PageLoad } from './$types';
import logger from '$lib/services/logger';

export const csr = dev;

export const load: PageLoad = async ({ data }) => {
	logger.debug(import.meta?.url ?? '');
	
	return {
		...data
	};
};
