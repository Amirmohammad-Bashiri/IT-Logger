import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// get logs
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const response = await fetch('/logs');
		const data = await response.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
