import type { PageServerLoad } from './$types';
import logger from '$lib/services/logger';

export const prerender = true;

export const load: PageServerLoad = async () => {
	logger.debug(import.meta.url ?? '');

	return {};
};
