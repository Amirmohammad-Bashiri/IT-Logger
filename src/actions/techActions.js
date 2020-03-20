import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';

// get techs from the server
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();

		const response = await fetch('/techs');
		const data = await response.json();

		dispatch({
			type: GET_TECHS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText
		});
	}
};

// set loading
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
