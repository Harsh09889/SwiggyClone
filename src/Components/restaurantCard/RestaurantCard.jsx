import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRestaurant } from "../../Redux/Restaurant/RestaurantActions";

const RestaurantCard = ({
	restaurantDetails: {
		id,
		name,
		city,
		image,
		discription,
		rating,
		deliverTime,
		cheapestPrice,
		menu,
	},
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleNavigate(id) {
		(async () => {
			const restaurant = {
				id,
				name,
				city,
				image,
				rating,
				deliverTime,
				cheapestPrice,
				discription,
				menu,
			};

			dispatch(addRestaurant(restaurant));

			navigate(`/restaurants/${id}`);
		})();
	}

	return (
		<div className='h-full flex flex-col group/card w-full p-5 px-6 border border-transparent hover:border-gray-200 hover:shadow-md'>
			<div onClick={(e) => handleNavigate(id)}>
				<img
					src={image}
					alt={name}
					className='h-40 w-64'
				/>
				<p className='text-sm font-semibold mt-4'>{name}</p>
				<p className='text-xs text-gray-500'>{discription}</p>
				<div className='mt-4 flex justify-between pb-4 border-b'>
					<span className='text-xs h-4 items-center  text-white px-2 bg-green-500 flex w-fit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='white'
							className='h-[80%]'>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
								clipRule='evenodd'
							/>
						</svg>
						{rating}
					</span>
					<span className='text-xs'>
						{deliverTime > 59
							? `${Math.floor(deliverTime / 60)} HRS ${deliverTime % 60}`
							: deliverTime}{" "}
						MINS{" "}
					</span>
					<span className='text-xs'>{cheapestPrice * 2}₹ for Two </span>
				</div>
				<div className='invisible flex group-hover/card:visible justify-center items-center pt-4 '>
					<p className='text-sm font-semibold text-blue-500'>QUICK VIEW</p>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
