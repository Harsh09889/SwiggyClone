import { Routes, Route } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import Restaurant from "../Pages/Restaurant";
import Search from "../Pages/Search";
import LandingPage from "./LandingPage/LandingPage";

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
					element={<HomePage />}
				/>
				<Route
					path='/search'
					element={<Search />}
				/>
				<Route
					path='/restaurants/:id'
					element={<Restaurant />}
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
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
