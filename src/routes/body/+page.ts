import type { PageLoad } from './$types';
import { MuscleClient, type BodyAreaDto, type IMuscleClient } from '../../api';

/**
 * Api client
 */
let muscleClient: IMuscleClient;

/**
 * Exposes the api client call
 * @returns List of body areas
 */
export const _bodyArea = async (): Promise<BodyAreaDto[]> => {
	return await muscleClient.getBodyAreas();
};

export const load: PageLoad = async ({ fetch }) => {
	muscleClient = new MuscleClient('', { fetch });
};
