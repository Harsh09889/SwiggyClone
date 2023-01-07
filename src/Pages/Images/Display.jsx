import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DishSearchComponent from "../../Components/RestaurantList/DishSearchComponent";

function Display({ dish }) {
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`http://localhost:8080/restaurants/${dish.restaurant[0]}`
			);
			setRestaurant(data);
		})();
	}, []);

	return !restaurant ? null : (
		<div
			key={dish.id}
			className='h-56 m-5 bg-white rounded-[20px] p-8'>
			<Link to={`/restaurants/${dish.restaurant[0]}`}>
				<h1 className='text-lg leading-5 font-bold first-letter:capitalize'>
					{restaurant.name}
				</h1>
				<p className='text-sm mb-4'>{restaurant.discription}</p>
			</Link>
			<DishSearchComponent
				dish={dish}
				restaurantId={1}
				isSearch={true}
			/>
		</div>
	);
}

export default Display;
