export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export function login(payload) {
	return {
		type: LOGIN,
		payload,
	};
}

export function logout(payload) {
	return {
		type: LOGOUT,
		payload,
	};
}

export function register(payload) {
	return {
		type: REGISTER,
		payload,
	};
}
