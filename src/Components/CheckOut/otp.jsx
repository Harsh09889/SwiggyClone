import "./otp.css"

export default function Otp() {



  return (
    <div>
      <h1>Enter the OTP send </h1>
      <input id="code" type="text" /><br />
      <button id="cnfrm" type="submit">Confirm</button>
      <p> Redirect to Card details  </p>
    </div>
  );
}