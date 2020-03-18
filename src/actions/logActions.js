import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

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

// add log
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const response = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// delete log
export const deleteLog = (id) => (dispatch) => {
	try {
		setLoading();

		fetch(`/logs/${id}`, {
			method: 'DELETE'
		});

		dispatch({
			type: DELETE_LOG,
			payload: id
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
