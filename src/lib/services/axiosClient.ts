import axios, { type AxiosInstance } from 'axios';
import https from 'https';
import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { idToken } from '$lib/stores/auth';

export const axiosClient = async (): Promise<AxiosInstance> => {
  if (!browser) {
    console.log('Must be mounted before using Auth0Client');
    throw {};
  }

   const agent = new https.Agent({
      rejectUnauthorized: false // To allow calls to HTTPS with self signed cert
   });

  // var auth0Client = await auth.createClient();
  // TODO: Audience should be populated.
  // var token = await auth0Client.getTokenSilently({ audience: "", detailedResponse: true });

  const token = get(idToken);

  console.log(token);
  const instance = axios.create({
        httpsAgent: agent,
    headers: {
      'Cache-Control': 'no-cache',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    transformResponse: data => data // Corrects bug that tries to double deserialize result
  });

  return instance;
};
