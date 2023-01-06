import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DishCategoryWise from "../Components/RestaurantList/DishCategoryWise";
import Skeleton from "react-loading-skeleton";
import Cart from "../Components/Cart";
import styles from "../styles/Restaurant.module.css";
import DishSearchComponent from "../Components/RestaurantList/DishSearchComponent";

const Restaurant = () => {
	const { id } = useParams();
	let data = useSelector((state) => state.restaurant.restaurant);
	let dishesData = useSelector((state) => state.restaurant.dishes);
	const [selectedMenu, setSelectedMenu] = useState(0);
	const [dishSearch, setDishSearch] = useState("");
	const [onlyDishesId, setOnlyDishesId] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const dishes = dishesData?.filter((dish) => {
		return dish.restaurant.includes(id);
	});

	function handleDishSearch(e) {
		setDishSearch(e.target.value);
	}

	console.log(searchResults);

	useEffect(() => {
		let toMatch = new RegExp(dishSearch, "i");
		if (dishSearch.length > 0) setSelectedMenu(-1);
		else setSelectedMenu(0);

		const search = dishesData.filter(
			(dish) => onlyDishesId.includes(dish.id) && dish.name.match(toMatch)
		);
		setSearchResults(search);
	}, [dishSearch]);

	useEffect(() => {
		if (dishSearch.length < 1) {
			document.getElementById(`dishId${selectedMenu}`).scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest",
			});
		}
	}, [selectedMenu]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const onlyDishes = [];
		data.menu.forEach((menuItem) => {
			onlyDishes.push(...menuItem.foodItems);
		});
		setOnlyDishesId(onlyDishes);
	}, []);

	return !data.id ? (
		<h1>Loading</h1>
	) : (
		<>
			<div className='mx-auto'>
				<ul className='text-xs mx-auto max-w-[1200px] flex py-1 gap-3'>
					<li>Home</li>
					<li>/</li>
					<li>{data.city}</li>
					<li>/</li>
					<li>{data.name}</li>
				</ul>
				<div
					className={`bg-[#171a29] h-60 flex items-center text-white relative`}>
					<div className='h-10 w-[35rem]  flex gap-8  absolute -bottom-5 left-1/2 -translate-x-1/2'>
						<div className='h-full flex items-center px-2 bg-white shadow-xl'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='black'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
									clipRule='evenodd'
								/>
							</svg>
							<input
								type='text'
								value={dishSearch}
								onChange={handleDishSearch}
								placeholder='Search for Dishes'
								className='h-full w-[18rem] text-xs  text-black ml-2  border-0 outline-none  '
							/>
						</div>
						<div className='h-full items-center flex bg-white px-2 gap-2 shadow-xl'>
							<input
								className='h-5 w-5'
								type='checkbox'
								name='vegOnly'
								id='vegOnly'
								value={"veg"}
							/>
							<label
								htmlFor='vegOnly'
								className='text-black text-xs font-bold'>
								Veg Only
							</label>
						</div>
					</div>
					<div className='max-w-[1200px] mx-auto flex h-[70%] items-end justify-between w-full  '>
						<div className='flex h-full gap-8 items-end'>
							<img
								className='h-full w-60'
								src={data.image}
								alt='name'
							/>
							<div className=''>
								<h1 className='text-4xl leading-10'>{data.name}</h1>
								<h1 className='text-sm text-gray-300 mb-4 font-semibold'>
									{data?.discription}
								</h1>
								<h1 className=' text-gray-200 first-letter:capitalize mb-4 font-semibold'>
									{data.city}
								</h1>
								<div className='mt-4 flex justify-between'>
									<div className='pr-8 border-r flex flex-col justify-end'>
										<span className='font-bold h-4 items-center mb-2 gap-2  text-white  flex w-fit'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='white'
												className='h-full'>
												<path
													fillRule='evenodd'
													d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
													clipRule='evenodd'
												/>
											</svg>
											{data.rating}
										</span>
										<p className='text-xs text-gray-300'>20+ Ratings</p>
									</div>
									<div className='px-8  border-r flex flex-col justify-end'>
										<span className=''>
											{data.deliverTime > 59
												? `${Math.floor(data.deliverTime / 60)} hour ${
														data.deliverTime % 60
												  }`
												: data.deliverTime}{" "}
											mins{" "}
										</span>
										<p className='text-xs text-gray-300'>Delivery Time</p>
									</div>
									<div className='px-8'>
										<span className=''>{data.cheapestPrice * 2} ₹ </span>
										<p className='text-xs text-gray-300'>Cost for Two</p>
									</div>
								</div>
							</div>
						</div>
						<div className='h-[80%] w-60 border relative pt-8 px-4'>
							<p className='absolute font-bold -top-5 -left-7 bg-[#171a29] p-2 pr-3 text-xl'>
								OFFER
							</p>
							<span className='flex text-sm gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-6 h-6 '>
									<path
										fillRule='evenodd'
										d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
										clipRule='evenodd'
									/>
								</svg>
								60% off up to ₹120 | Use code TRYNEW
							</span>
							<span className='flex text-sm gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-6 h-6 '>
									<path
										fillRule='evenodd'
										d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
										clipRule='evenodd'
									/>
								</svg>
								60% off up to ₹120 | Use code TRYNEW
							</span>
						</div>
					</div>
				</div>
				<div className='max-w-[1200px] mt-8 w-full flex columns-4 mx-auto'>
					<div className='col-span-1 w-1/3 flex flex-col items-end'>
						{dishSearch.length > 0 && (
							<p
								className={`text-sm pr-8 border-r-4 cursor-pointer border-transparent mb-2 ${
									selectedMenu === -1
										? "text-[tomato] font-bold border-[tomato]"
										: ""
								}`}
								// onClick={}
							>
								Search
							</p>
						)}
						{data.menu?.map((menuItem, idx) => (
							<p
								className={`text-sm pr-8 border-r-4 cursor-pointer border-transparent mb-2 ${
									selectedMenu === idx
										? "text-[tomato] font-bold border-[tomato]"
										: ""
								}`}
								onClick={(e) => setSelectedMenu(idx)}
								key={idx}>
								{menuItem.category}
							</p>
						))}
					</div>

					<div className='col-span-2 w-2/3  '>
						{dishes ? (
							<div
								className={` ${styles.dishListContainer} h-[calc(100vh-10rem)] overflow-y-scroll`}>
								{dishSearch.length > 0
									? searchResults.map((dish) => (
											<div className='flex flex-col px-8 py-4'>
												<DishSearchComponent
													key={dish.id}
													dish={dish}
													restaurantId={id}
												/>
											</div>
									  ))
									: data.menu?.map((dishObj, idx) => (
											<DishCategoryWise
												key={idx}
												id={idx}
												restaurantId={id}
												category={dishObj.category}
												foodItems={dishObj.foodItems}
											/>
									  ))}
							</div>
						) : (
							<div className='mt-16 flex gap-4 flex-col items-center justify-center'>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
							</div>
						)}
					</div>

					<div className='col-span-1 w-1/3 '>
						<Cart restaurantId={data.id} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Restaurant;
