import type { PageLoad } from './$types';
import { MuscleClient, type BodyAreaDto, type IMuscleClient, BodyAreaTypes } from '../../../api';

/**
 * Api client
 */
let muscleClient: IMuscleClient;

/**
 * The page's target
 */
let bodyAreaId: BodyAreaTypes;

/**
 * Exposes the api client call
 * @returns List of body areas
 */
export const _bodyArea = async (): Promise<BodyAreaDto> => {
	return await muscleClient.getBodyArea(bodyAreaId);
};

export const load: PageLoad = async ({ fetch, params }) => {
	muscleClient = new MuscleClient('', { fetch });
	bodyAreaId = BodyAreaTypes[params.id as keyof typeof BodyAreaTypes];
};
