import React, { useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RestaurantCard from "../restaurantCard/RestaurantCard";

const index = () => {
	const location = useLocation();
	const [destination, setDestination] = useState("");

	const filtersReducer = (state, { type }) => {
		switch (type) {
			case "deliveryTime":
				return "_sort=deliveryTime&_order=asc";

			case "ratings":
				return "_sort=ratings&_order=desc";

			case "pricelth":
				return "_sort=cheapestPrice&_order=asc";

			case "pricehtl":
				return "_sort=cheapestPrice&_order=desc";

			default:
				return "";
		}
	};

	const [filters, dispatch] = useReducer(filtersReducer, "");

	const { data, loading, error, reFetch } = useFetch(
		`http://localhost:8080/restaurants?${filters}`
	);

	const handleFilterChange = (filter) => {
		dispatch({ type: filter });
	};

	return (
		<>
			<div className='flex flex-col max-w-[1200px] mx-auto justify-center bg-white'>
				<header className=' h-16 w-full  border-b flex items-end  justify-between'>
					<p className='font-bold tracking-wider text-2xl'>
						{data.length} Restaurants
					</p>
					<ul className='flex gap-2 text-sm text-gray-500 w-1/2 h-full  justify-between'>
						<li
							onClick={(e) => handleFilterChange("")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Relevance
						</li>
						<li
							onClick={(e) => handleFilterChange("deliveryTime")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Delivery Time
						</li>
						<li
							onClick={(e) => handleFilterChange("ratings")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Rating
						</li>
						<li
							onClick={(e) => handleFilterChange("pricelth")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Cost:Low to High
						</li>
						<li
							onClick={(e) => handleFilterChange("pricehtl")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Cost:High to Low
						</li>
						<li
							onClick={(e) => handleFilterChange("")}
							className='cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end  '>
							Filters{" "}
						</li>
					</ul>
				</header>

				{/* Restaurants to be rendered over here */}

				{loading ? (
					<h1>Loading</h1>
				) : (
					<div className='grid grid-cols-4 w-full mt-4 gap-8'>
						{" "}
						{data.map((restaurant) => (
							<RestaurantCard
								restaurantDetails={restaurant}
								key={restaurant.id}
							/>
						))}{" "}
					</div>
				)}
			</div>
		</>
	);
};

export default index;
