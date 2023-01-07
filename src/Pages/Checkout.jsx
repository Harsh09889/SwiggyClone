import { useState } from "react";
import CashOnDelivery from "../Components/CheckOut/CashOnDelivery";
import CheckoutCredit from "../Components/CheckOut/CheckoutCredit";
import Wallet from "../Components/CheckOut/Wallet";
import UPI from "../Components/CheckOut/UPI";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PercentSharpIcon from "@mui/icons-material/PercentSharp";
import { useSelector } from "react-redux";

function Checkout() {
  const [checkoutState, setCheckoutState] = useState(4);
  let isAuth = useSelector((state) => state.auth.auth.isAuth);
  let curUser = useSelector((state) => state.auth.currentUser);
  const cart = useSelector(state => state.cart)
  console.log(curUser)

  let currentCart = null
  if(isAuth){
    [currentCart] = cart.filter((elem) => elem.username === curUser.username)
  }
  isAuth = !isAuth
  return (
    <div className="pb-20 flex max-w-[1500px] mx-auto bg-slate-100 ">
      <div className="w-[74%]  flex flex-col gap-12 items-center pt-20 ">
        {isAuth ? (
          <div className="h-52 border w-[80%] bg-white p-8">
            <h1 className="text-xl font-semibold">Logged In</h1>
            <br />
            <div className="flex gap-6 text-lg  font-medium ">
              <h2>Name</h2> <h2>Phone number</h2>
              <CheckCircleOutlineTwoToneIcon style={{ color: "green" }} />
            </div>
          </div>
        ) : (
          <div className="h-52 border w-[80%] bg-white p-8">
            <h1 className="text-2xl font-bold">Account</h1>
            <p className="text-sm text-slate-400">
              To place you order now, Login to your account or Signup
            </p>
            <div className="flex gap-4 mt-8">
              <button className="p-2 px-4 border bg-white text-xs font-medium">
                Have an account <br />
                <b> Login</b>
              </button>
              <button className="p-2 px-4 border bg-green-400 text-xs font-medium">
                New to Swiggy? <br /> <b>Signup</b>
              </button>
            </div>
          </div>
        )}
        <div className=" border w-[80%] bg-white p-8">
          <h1 className="text-xl font-semibold">Select delivery address</h1>
          {isAuth && (<>
          <p className="text-base font-medium">
            You have a saved address in this location
          </p>
          <br />
          <div className="h-52 flex bg-green-200  w-100%  p-8">
            <div className=" border w-[50%]">
              <h1 className="text-xl font-semibold">
                <HomeIcon /> Home
              </h1>
              <p className="text-base font-medium p-5">
                Lorem ipsum dolor soluta animi sunt quidem nesciunt! Dicta, vel
                labore? Unde.
              </p>
              <button className=" rounded-sm text-white text-sm h-7 p-1 ml-4">
                DELIVER HERE
              </button>
            </div>
            <div className=" border w-[50%]">
              <h1 className="text-xl font-semibold ">
                {" "}
                <AddLocationAltIcon /> Add New Address
              </h1>
              <p className="text-base font-medium p-5">
                {" "}
                Lorem ipsum dolor soluta animi sunt quidem nesciunt! Dicta, vel
                labore? Unde.
              </p>
              <button className=" rounded-sm text-white text-sm h-7 p-1 ml-4">
                ADD NEW
              </button>
            </div>
          </div>
          </>
          )}
        </div>
        <div className=" border w-[80%] bg-white p-5">
          <h1 className="text-xl font-semibold">Choose payment method</h1>
          {isAuth && <div className="flex  h-100px ">
            <div className="mt-5  w-[40%] bg-slate-200 p-8  text-start font-bold  ">
              <button
                onClick={() => {
                  setCheckoutState(1);
                }}
                className={`h-12 text-left w-52 pl-2 hover:bg-white ${
                  checkoutState === 1 ? "bg-white" : ""
                }`}
              >
                <AccountBalanceWalletIcon /> Wallets
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  setCheckoutState(2);
                }}
                className={`h-12 pl-2 text-left w-52 hover:bg-white ${
                  checkoutState === 2 ? "bg-white" : ""
                }`}
              >
                {" "}
                <PriceChangeIcon /> UPI
              </button>
              <br />
              <br />
              {/* <button  className='h-12 w-32 hover:bg-white '> Sodexo</button><br /><br /> */}
              <button
                onClick={() => {
                  setCheckoutState(3);
                }}
                className={`h-12 pl-2 text-left w-52 hover:bg-white ${
                  checkoutState === 3 ? "bg-white" : ""
                }`}
              >
                {" "}
                <AccountBalanceIcon /> NetBanking
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  setCheckoutState(4);
                }}
                className={`h-12 pl-2 text-left w-52 hover:bg-white ${
                  checkoutState === 4 ? "bg-white" : ""
                }`}
              >
                <AddCardIcon /> Credit $ Debit Cards
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  setCheckoutState(5);
                }}
                className={`h-12 pl-2 text-left w-52 hover:bg-white ${
                  checkoutState === 5 ? "bg-white" : ""
                }`}
              >
                {" "}
                <CurrencyRupeeIcon /> Pay on Delivery
              </button>
              <br />
              <br />
            </div>
            <div className="  w-[60%]  p-8">
              {/* {state ?   <Wallet/>:} */}
              {checkoutState === 1 ? <Wallet /> : ""}
              {checkoutState === 2 ? <UPI /> : ""}
              {checkoutState === 4 ? <CheckoutCredit /> : ""}
              {checkoutState === 5 ? <CashOnDelivery /> : ""}
            </div>
          </div>}
        </div>
      </div>
      <div className="w-[40%]  p-5  ">
        <div className=" border w-[80%] h-[90%] bg-white p-8">
          <input
            className="font-extralight w-80  bg-gray-100 h-8 p-2"
            type="text"
            name=""
            id=""
            placeholder="“Any suggestions? We will pass it on..."
          />
          <br />
          <br />
          <div className="w-80 border border-gray-300 p-2">
            <input type="checkbox" />
            <label>
              {" "}
              Unwell, or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for
              COD)
            </label>
          </div>
          <br />
          <button className="h-10 p-2 w-80 border-dashed border-2 border-gray-300 hover:bg-gray-200">
            <PercentSharpIcon /> Apply Coupon
          </button>
          <br />
          <br />

          <div className="col font-medium mb-2">
            <h2>Bill Details</h2>
          </div>

          <div className="col text-xs font-medium p-1">Item Total</div>

          <div className="col  text-xs font-medium pb-2">Delivery Fee 🛈</div>
          <hr className="border border-gray-300" />

          <div className=" text-sm font-extralight pb-3 pt-3 ">
            Govt Taxes & Restaurant Charges 🛈
          </div>
          <hr style={{ border: "1px solid black" }} />
          <div className="flex justify-between p-2">
            <div className="  font-semibold ">TO PAY</div>
            <div>₹ {currentCart?.cartItems.length > 1 && currentCart.cartItems.reduce(((acc,val) => acc + +val.totalPrice),0) || 0 }</div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Checkout;
