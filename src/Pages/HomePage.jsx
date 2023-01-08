import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import RestaurantList from "../Components/RestaurantList/";
import { login } from "../Redux/Auth/AuthActions";

const HomePage = () => {
	const [carousel, setCarousel] = useState(0);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(login({ phn: 8527718561, password: "123" }));
	}, []);

	return (
		<div className='h-full min-h-screen'>
			<div className='bg-[#171a29] relative'>
				{carousel > 0 && (
					<button
						onClick={(e) => setCarousel(carousel - 1)}
						className='absolute h-16 left-8 rounded-full top-1/2 -translate-y-1/2 w-16 bg-white grid place-items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
							/>
						</svg>
					</button>
				)}

				<div className='max-w-[72rem] w-[80%] relative pl-1  mx-auto flex overflow-hidden'>
					<motion.div
						animate={{ left: carousel && `-${carousel * 15 + 3}rem` }}
						className='relative flex justify-between  gap-12 py-8'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
							{" "}
							<img
								src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep'
								alt='meal'
							/>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
							<img
								src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t'
								alt='meal'
							/>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
							<img
								src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym
'
								alt='meal'
							/>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
							<img
								src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v'
								alt='meal'
							/>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
							{" "}
							<img
								src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3'
								alt='meal'
							/>
						</motion.div>
					</motion.div>
				</div>
				{carousel < 1 && (
					<button
						onClick={(e) => setCarousel(carousel + 1)}
						className='absolute h-16 right-8 rounded-full top-1/2 -translate-y-1/2 w-16 bg-white  grid place-items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
							/>
						</svg>
					</button>
				)}
			</div>

			{/* Restaurants List */}
			<RestaurantList />
		</div>
	);
};

export default HomePage;
