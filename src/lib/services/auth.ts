// src/lib/services/auth.ts
import { Auth0Client, PopupCancelledError, PopupTimeoutError } from '@auth0/auth0-spa-js';
import { user, isAuthenticated, idToken, popupOpen } from '$lib/stores/auth';
import logger from '$lib/services/logger';
import { auth0Config } from '$lib/config/auth_config';

// Static shared client
const client = new Auth0Client({
	authorizationParams: {
		redirect_uri: auth0Config.redirect_uri
	},
	cacheLocation: 'localstorage',
	clientId: auth0Config.client_id,
	domain: auth0Config.domain,
	useRefreshTokens: true
});

// Initializes Auth0 client and stores
async function refreshAuthStore(): Promise<void> {
	try {
		const auth0IsAuthenticated = await client.isAuthenticated();

		if (auth0IsAuthenticated) {
			// If authenticated already try getting token
			const auth0Token = await client.getTokenSilently({
				authorizationParams: {
					audience: auth0Config.audience
				},
				detailedResponse: true
			});
			// and user
			const auth0User = await client.getUser();

			isAuthenticated.set(auth0IsAuthenticated);
			idToken.set(auth0Token.access_token);
			user.set(auth0User ?? null);
			return;
		}
	} catch (ex) {
		logger.warn(ex, 'An error occurred authenticating user.');
	}

	isAuthenticated.set(false);
	idToken.set(null);
	user.set(null);
}

// Call Auth0 Popup
async function loginWithPopup(): Promise<void> {
	try {
		popupOpen.set(true);

		await client.loginWithPopup({
			authorizationParams: {
				audience: auth0Config.audience
			}
		});

		await refreshAuthStore();
	} catch (ex) {
		if (ex instanceof PopupCancelledError) {
			logger.info('The user closed the login window.');
		} else if (ex instanceof PopupTimeoutError) {
			logger.info('The login window timed out.');
		} else {
			logger.warn(ex, 'An error occurred during login.');
		}
	} finally {
		popupOpen.set(false);
	}
}

// logout function
async function logout(): Promise<void> {
	client.logout();
	isAuthenticated.set(false);
	idToken.set(null);
	user.set(null);
}

export {
	refreshAuthStore,
	loginWithPopup,
	logout
};