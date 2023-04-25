import { idToken } from "$lib/stores/auth";
import { get } from "svelte/store";
import { generalConfig } from "$lib/config/generalConfig";

abstract class FetchBase {
  //constructor () {
  //}
  
  getBaseUrl = (_defaultUrl: string, overrideUrl?: string): string => {
    return (overrideUrl) || generalConfig.icsApiUrl;
  };

  transformOptions = async (options: RequestInit): Promise<RequestInit> => {
    options.headers = {
      ...options.headers,
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${get(idToken)}`
    };

    return options;
  };
}
export { FetchBase };
