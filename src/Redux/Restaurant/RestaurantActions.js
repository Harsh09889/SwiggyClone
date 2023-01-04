const ADD_RESTAURANT = "ADD_RESTAURANT";

function addRestaurant(payload) {
	return {
		type: ADD_RESTAURANT,
		payload,
	};
}
