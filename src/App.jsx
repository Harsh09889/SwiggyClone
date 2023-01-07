import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LoginSignup from "./Components/Login-Signup/LoginSignup";
import LandingPage from "./Components/LandingPage/LandingPage";
import { useState } from "react";

function App() {
  const [openLoginSignup, setOpenLoginSignup] = useState(false);
  const [loadlogin, setLoadLogin] = useState(true);

  return (
    <>
      {/* <AllRoutes /> */}
      <LoginSignup open={openLoginSignup} loadlogin={loadlogin} />

      <LandingPage
        setOpenLoginSignup={setOpenLoginSignup}
        setLoadLogin={setLoadLogin}
      />
    </>
  );
}

//

export default App;
