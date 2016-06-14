/* Constants */
export const ACTION_LOGIN 	= 	'ACTION_LOGIN';
export const ACTION_LOGOUT 	= 	'ACTION_LOGOUT';
export const ACTION_CHECK 	= 	'ACTION_CHECK';

export function login (username, password) {
	console.log(username, password);
	return {
		type: ACTION_LOGIN,
		payload: {username, password}
	}
}

export function logout () {
	return  {
		type: ACTION_LOGOUT,
		payload: {}
	}
}

export function check () {
	return {
		type: ACTION_CHECK,
		payload: {}
	}
}

var ACTION_HANDLERS = {
	[ACTION_LOGIN]	: 	(state, action) => { return 1},
	[ACTION_LOGOUT]	: 	(state, action) => { return 0},
	[ACTION_CHECK] 	: 	(state, action) => { return 0}
}

var defaultState = 0;

export default function (state = defaultState, action) {
	var handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}