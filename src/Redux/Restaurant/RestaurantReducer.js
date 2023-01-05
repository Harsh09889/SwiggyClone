const INITIAL_STATE = {
	restaurant: {
		id: "",
		name: "",
		city: "",
		image: "",
		ratings: "",
		cheapestPrice: 0,
		deliveryTime: 0,
		menu: [],
	},
	dishes: [],
};

function RestaurantReducer(state, { type, payload }) {
	switch (type) {
		case ADD_RESTAURANT:
			return { ...payload };
	}
}
