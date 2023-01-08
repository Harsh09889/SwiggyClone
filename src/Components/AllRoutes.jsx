import { Routes, Route } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import Restaurant from "../Pages/Restaurant";
import Search from "../Pages/Search";
import LandingPage from "./LandingPage/LandingPage";
import ThankyouPage from "../Pages/ThankyouPage";

import Otp from "./CheckOut/Otp/Otp";

const AllRoutes = ({ setOpenLoginSignup, setLoadLogin }) => {
	return (
		<>
			<Routes>
				<Route
					path='/home'
					element={
						<LandingPage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/'
					element={
						<HomePage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/search'
					element={
						<Search
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/restaurants/:id'
					element={
						<Restaurant
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/checkout'
					element={
						<Checkout
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='*'
					element={
						<NotFound
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>

				<Route
					path='/otp'
					element={
						<Otp
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/thankyou'
					element={
						<ThankyouPage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
