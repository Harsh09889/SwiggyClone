import {
	LOGIN,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
} from "./AuthActions";

const INITIAL_STATE = {
	auth: {
		isAuth: false,
		error: false,
	},
	currentUser: { username: "", name: "" },
	users: [],
};

// userSchema -> { username: "", name: "", phn: "", password: "" }
export function AuthReducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				auth: { isAuth: true, error: null },
			};
		case LOGIN_FAILED:
			return {
				...state,
				auth: { isAuth: false, error: payload.error },
			};

		case LOGOUT:
			return {
				...state,
				auth: {
					isAuth: false,
					error: false,
				},
				currentUser: { username: "", name: "" },
			};

		case REGISTER_SUCCESS:
			return { ...state, users: [...state.users, payload] };

		case REGISTER_FAILED:
			return {
				...state,
				auth: {
					isAuth: false,
					error: payload.error,
				},
				currentUser: { username: "", name: "" },
			};

		default:
			return state;
	}
}
