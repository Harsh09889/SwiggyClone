import { LOGIN, LOGOUT, REGISTER } from "./AuthActions";

const INITIAL_STATE = {
	auth: {
		isAuth: false,
		error: false,
	},
	currentUser: { username: "", name: "" },
	users: [],
};

// userSchema -> { username: "", name: "", email: "", password: "" }
export function AuthReducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case LOGIN: {
			const presentUser = state.users.filter(
				(user) => user.email === payload.email
			);

			if (presentUser.length === 0)
				return {
					...state,
					auth: { isAuth: false, error: "User does Not Exist" },
				};

			if (presentUser[0].password !== payload.password)
				return {
					...state,
					auth: { isAuth: false, error: "Username or Password is Wrong" },
				};

			return {
				...state,
				auth: { isAuth: true, error: false },
				currentUser: {
					username: presentUser[0].username,
					name: presentUser[0].name,
				},
			};
		}

		case LOGOUT:
			return {
				...state,
				auth: {
					isAuth: false,
					error: false,
				},
				currentUser: { username: "", name: "" },
			};

		case REGISTER: {
			const isUser = state.users.filter(
				(user) =>
					user.username === payload.username || user.email === payload.email
			);

			if (isUser.length === 0)
				return { ...state, users: [...state.users, payload] };

			return {
				...state,
				auth: { isAuth: false, error: "User Already Exists" },
			};
		}

		default:
			return state;
	}
}
