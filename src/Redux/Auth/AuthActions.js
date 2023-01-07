import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

//payload: {phn: 0123456789, password:}

// export function reduxThunkActionCreator(url) {
// 	return function reduxThunkAction(dispatch, getState) {
// 		if (getState().products.electronic.length === 0) {
// 			fetch(url)
// 				.then((res) => res.json())
// 				.then((data) => {
// 					console.log(data);
// 					dispatch({
// 						type: "ELECTRONIC",
// 						data,
// 					});
// 				});
// 		}
// 	};
// }

export function login(loginDetails) {
	return async function reduxThunkAction(dispatch, getState) {
		const { data } = await axios.get(`https://swiggy-api.glitch.me/users`);
		console.log("users from the server -> ", data);
		if (data.length > 0) {
			const curUser = data.filter((user) => user.phn === loginDetails.phn);

			console.log("This is the result of matched User -> ", curUser);

			if (curUser.length === 0) {
				dispatch({
					type: LOGIN_FAILED,
					payload: { isError: "User Does not Exist." },
				});
			} else {
				if (curUser[0].password !== loginDetails.password) {
					dispatch({
						type: LOGIN_FAILED,
						payload: { isError: "Phone Number or Password is not correct." },
					});
				} else {
					dispatch({
						type: LOGIN_SUCCESS,
						payload: { name: curUser.name, username: curUser.username },
					});
				}
			}
		} else {
			dispatch({
				type: LOGIN_FAILED,
				payload: { isError: "User Does not Exist." },
			});
		}
	};
}

// export function login(payload) {
// 	return {
// 		type: LOGIN,
// 		payload,
// 	};
// }

export function logout(payload) {
	return {
		type: LOGOUT,
		payload,
	};
}

// export function register(payload) {
// 	return {
// 		type: REGISTER,
// 		payload,
// 	};
// }

export function register(registerDetails) {
	return async function reduxThunkAction(dispatch, getState) {
		const { data } = await axios.get(`https://swiggy-api.glitch.me/users`);

		if (data.length > 0) {
			const curUser = data.filter((user) => user.phn === registerDetails.phn);
			if (curUser.length === 0) {
				const { data } = await axios.post(
					`https://swiggy-api.glitch.me/users`,
					registerDetails
				);

				if (data.ok) dispatch({ type: REGISTER_SUCCESS });
				else
					dispatch({
						type: REGISTER_FAILED,
						payload: {
							error: "Could Not Register, Try again after some time.",
						},
					});
			} else {
				dispatch({
					type: REGISTER_FAILED,
					payload: { error: "This Phone Number is Already Registered" },
				});
			}
		} else {
			const { data } = await axios.post(
				`https://swiggy-api.glitch.me/users`,
				registerDetails
			);

			if (data.ok) dispatch({ type: REGISTER_SUCCESS });
			else
				dispatch({
					type: REGISTER_FAILED,
					payload: { error: "Could Not Register, Try again after some time." },
				});
		}
	};
}
