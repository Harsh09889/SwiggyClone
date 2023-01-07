import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoginSignup from "./Components/Login-Signup/LoginSignup";

function App() {
	const [switchLogin, setSwitchLogin] = useState(false);
	const isAuth = useSelector((state) => state.auth.auth.isAuth);
	return (
		<>
			<LoginSignup
				switchLogin={switchLogin}
				setSwitchLogin={setSwitchLogin}
			/>

			<Navbar />
			<AllRoutes />
			<Footer />
		</>
	);
}

export default App;
