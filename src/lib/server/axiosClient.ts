import axios, { type AxiosInstance } from 'axios';
import { idToken } from "$lib/stores/auth";
import { get } from 'svelte/store';
import * as https from 'https';
import auth from "$lib/services/auth";

export const apiUrl = "https://localhost:60451";

export const axiosClient = async (): Promise<AxiosInstance> => {
    var agent = new https.Agent({
        rejectUnauthorized: false // To allow calls to HTTPS with self signed cert
    });


    //var auth0Client = await auth.createClient();
    // TODO: Audience should be populated.
    //var token = await auth0Client.getTokenSilently({ audience: "", detailedResponse: true });
console.log("testing 111");
//console.log(token.id_token);



    let valval;
    idToken.subscribe(v => { 
        console.log("34333");
        console.log(v);

        valval = v});


    console.log("testtesttess1t");
    console.log(get(idToken));

    const instance = axios.create({
        httpsAgent: agent,
        headers: {
            'Cache-Control': 'no-cache',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJY3NVc2VySWQiOiIxMjM0MTIzNC0xMjM0LTEyMzQtMTIzNC0xMjM0MTIzNDEyMzQiLCJyb2xlIjpbIkFkbWluIiwiTWVtYmVyIl0sImlzcyI6Imh0dHBzOi8vaWNzLWRldi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjJhYTUyNDA1NzEyMGM4MzBmZDE2Y2I0IiwiYXVkIjoiaHR0cHM6Ly9pcm9uY2xhbnN0dWRpb3MuY29tIiwiaWF0IjoxNjY2NzIxMDYzLCJleHAiOjE2NjY4MDc0NjMsImF6cCI6ImhRZnU0VURGbGJVbTBVU25JS05QOVBlR0d1WnZJT0FsIiwiZ3R5IjoicGFzc3dvcmQiLCJwZXJtaXNzaW9ucyI6WyJBdXRoMDpBcGlJZGVudGlmaWVyIiwicmVhZDp2YWx1ZXMiXX0.f1VkG540lM5krUjU8LrSQd0kJb2c3xdIpfRTWeotY4Y',
            //'testtest': `${idToken}`,
            'Content-Type': 'application/json',
        },
        transformResponse: data => data // Corrects bug that tries to double deserialize result
    });

    return instance;
};