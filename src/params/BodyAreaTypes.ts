import type { ParamMatcher } from '@sveltejs/kit';
import { BodyAreaTypes } from '../api';
 
export const match = ((param) => {
    return param in BodyAreaTypes;
}) satisfies ParamMatcher;