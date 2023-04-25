import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async function ({ event, resolve }) {
	console.log("Handle Server");
	/*console.log(event.locals);

	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}*/
	const response = await resolve(event);
	return response;
};
