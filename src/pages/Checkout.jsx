import { useState, useEffect } from "react";
import {
  MdLocalShipping,
  MdStore,
  MdEmail,
  MdHome,
  MdLocationCity,
} from "react-icons/md";
import { FaPaypal, FaCreditCard } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

export const Checkout = () => {
  //
  const { getCart } = useCartContext();
  const cartItems = getCart();
  // fetch totla cart items
  const totalItem = cartItems.length;
  // get total price
  const totalPrice = localStorage.getItem("totalPrice");

  // email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // country
  const [country, setCountry] = useState("");
  //vorname
  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  //nachname
  const [lastname, setLastName] = useState("");
  const [lastnameError, setLastNoError] = useState("");
  //straße
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState("");
  //hausnummer
  const [homeNo, setHomeNo] = useState("");
  const [homeNoError, setHomeNoError] = useState("");
  //zip code
  const [zip, setZIP] = useState("");
  const [zipError, setZipError] = useState("");
  // city
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  // use info
  const [useInfo, setUseInfo] = useState(true);
  // --- States ---
  const [showPickup, setShowPickup] = useState(false);
  const [showShip, setShip] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");

  // hooks for card
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  // wenn chnage the paymentmethod
  useEffect(() => {
    setCardNumber("");
    setCVC("");
    setDate("");
    setCardholderName("");
  }, [paymentMethod]);
  const navigate = useNavigate();

  // payment with paypal
  const [paypalAcout, setPaypalAcount] = useState("");
  // payment with google pay
  const [googlepayNumber, setGooglepayNumber] = useState("");
  // handleEmail
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("email is requerd!");
      console.log("email is requerd!");
    } else if (!emailRegex.test(value)) {
      setEmailError("Enter a valid Email");
      console.log("Enter a valid Email");
    } else {
      setEmailError("");
    }
  };

  // firstname
  const handleFirstname = (e) => {
    const value = e.target.value;
    setFirstname(value);
    if (!value) {
      setFirstnameError("first name is requerd.");
    } else if (value.length < 3) {
      setFirstnameError("invalid first name.must atlest 3 charectar.");
    } else {
      setFirstnameError("");
    }
  };
  // lastname
  const handleLasttname = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (!value) {
      setLastNoError("last name is requerd.");
    } else if (value.length < 3) {
      setLastNoError("invalid last name.must atlest 3 charectar.");
    } else {
      setLastNoError("");
    }
  };
  // street
  const handleStreet = (e) => {
    const value = e.target.value;
    setStreet(value);
    if (!value) {
      setStreetError("Street is requerd.");
    } else if (value.length < 3) {
      setStreetError("invalid street.must atlest 3 charectar.");
    } else {
      setStreetError("");
    }
  };
  // home nummber
  const handleHomeNO = (e) => {
    const value = e.target.value;
    setHomeNo(value);
    if (!value) {
      setHomeNoError("Home nummber is requerd.");
    } else if (!/^\d{1,}$/.test(value)) {
      setHomeNoError("Home number must be at least 1 digit.");
    } else {
      setHomeNoError("");
    }
  };
  // zip code
  const handleZIP = (e) => {
    const value = e.target.value;
    setZIP(value);
    if (!value) {
      setZipError("Zip code is requerd.");
    } else if (!/^\d{4,}$/.test(value)) {
      setZipError("ZIP code must be at least 4 characters.");
    } else {
      setZipError("");
    }
  };
  //city
  const handleCity = (e) => {
    const value = e.target.value;
    setCity(value);
    if (!value) {
      setCityError("city name is requerd.");
    } else if (value.length < 3) {
      setCityError("invalid city name. must atlest 3 charectar.");
    } else {
      setCityError("");
    }
  };
  // use info checkbox for billing address
  const handleUseinfo = (e) => {
    const checked = e.target.checked;
    setUseInfo(checked);
    localStorage.setItem("billingAddress", JSON.stringify(checked));
  };

  // --- Handlers ---
  const handleShowPickup = () => {
    setShowPickup(true);
    setShip(false);
  };
  const handleShowShip = () => {
    setShip(true);
    setShowPickup(false);
  };

  // validation  bank card
  const handleCard = () => {
    // Card number: 13–19 digits
    if (!/^\d{13,19}$/.test(cardNumber)) {
      toast.error("Please enter a valid card number (13 - 19 digits)");
      return false;
    }

    // Expiry date: MM/YY
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(date)) {
      toast.error("Expiry date must be in MM/YY format");
      return false;
    }

    // Check if card is expired
    const [month, year] = date.split("/").map(Number);
    const expiryDate = new Date(2000 + year, month);
    const now = new Date();

    if (expiryDate <= now) {
      toast.error("Card has expired");
      return false;
    }

    // CVC: 3 or 4 digits
    if (!/^\d{3,4}$/.test(cvc)) {
      toast.error("Invalid CVC (3 or 4 digits)");
      return false;
    }

    // Cardholder name
    if (!cardholderName || cardholderName.trim().length < 3) {
      toast.error("Please enter the cardholder name");
      return false;
    }

    return true;
  };

  const handlePaypal = () => {
    if (!paypalAcout || paypalAcout.length < 5) {
      toast.error(
        "Please fix the errors in the paypalAcout and must atlest 5 characters"
      );
      return false;
    }
    return true;
  };
  const handleGooglepay = () => {
    if (!googlepayNumber || googlepayNumber.length < 5) {
      toast.error(
        "Please fix the errors in the googlepayNumber and must atlest 5 characters"
      );
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    const isFormValid =
      !emailError &&
      !firstnameError &&
      !lastnameError &&
      !streetError &&
      !homeNoError &&
      !zipError &&
      !cityError &&
      email &&
      firstname &&
      lastname &&
      street &&
      homeNo &&
      zip &&
      city &&
      country;

    if (showShip && !isFormValid) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    let isValidPayment = false;

    if (paymentMethod === "card") {
      isValidPayment = handleCard();
    }

    if (paymentMethod === "paypal") {
      isValidPayment = handlePaypal();
    }

    if (paymentMethod === "googlepay") {
      isValidPayment = handleGooglepay();
    }

    if (!isValidPayment) return;

    toast.success(`Processing order with ${paymentMethod}`);

    const Address = showShip
      ? { firstname, lastname, email, street, homeNo, zip, city, country }
      : { pickup: true };

    const orderDate = new Date();
    const orderDetail = { paymentMethod, email, orderDate };
    localStorage.setItem("orderDetail", JSON.stringify(orderDetail));
    localStorage.setItem("address", JSON.stringify(Address));
    navigate("/receivedOrder");
  };

  const countries = [
    { id: 1, name: "Afghanistan" },
    { id: 2, name: "USA" },
    { id: 3, name: "Germany" },
    { id: 4, name: "Iran" },
    { id: 5, name: "UAE" },
  ];
  return (
    <section className="bg-gray-50 py-23">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ==================== LEFT FORM ==================== */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* --- Contact --- */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Contact Information <span className="text-red-400">*</span>
            </h2>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Email address"
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                emailError ? "border-red-400" : "border-gray-200"
              }`}
            />
            <p className="text-sm text-gray-500 mt-1">
              You are currently checking out as a guest.
            </p>
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          {/* --- Delivery --- */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleShowShip}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium ${
                showShip
                  ? "bg-green-400 text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              <MdLocalShipping size={20} /> Ship
            </button>
            <button
              onClick={handleShowPickup}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium ${
                showPickup
                  ? "bg-green-400 text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              <MdStore size={20} /> Pick up
            </button>
          </div>

          {/* --- Pickup Addresses --- */}
          {showPickup && (
            <div className="mt-4 space-y-2 border p-3 rounded">
              <label className="flex items-center gap-2 p-2 cursor-pointer">
                <input type="radio" name="pickup" />
                Rathaus 13, Heilbronn 74546, Germany
              </label>
              <label className="flex items-center gap-2 p-2 cursor-pointer">
                <input type="radio" name="pickup" /> Rathaus 13, 74546 Öhingen,
                Germany
              </label>
            </div>
          )}

          {/* --- Shipping Address --- */}
          {showShip && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-3">
                Shipping Address <span className="text-red-400">*</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* contry */}

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="border py-2 px-2 rounded focus:outline-none"
                >
                  <option value="" disabled>
                    Select country
                  </option>

                  {countries.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <div>
                  <input
                    value={firstname}
                    onChange={handleFirstname}
                    name=""
                    placeholder="First Name"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      firstnameError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {firstnameError && (
                    <p className="text-sm text-red-500 mt-0">
                      {firstnameError}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    value={lastname}
                    onChange={handleLasttname}
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      lastnameError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {lastnameError && (
                    <p className="text-sm text-red-500 mt-0">{lastnameError}</p>
                  )}
                </div>
                {/* street */}
                <div>
                  <input
                    value={street}
                    onChange={handleStreet}
                    placeholder="Street"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      streetError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {streetError && (
                    <p className="text-sm text-red-500 mt-0">{streetError}</p>
                  )}
                </div>
                {/* home nummber */}
                <div>
                  <input
                    value={homeNo}
                    onChange={handleHomeNO}
                    placeholder="House Number"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      homeNoError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {homeNoError && (
                    <p className="text-sm text-red-500 mt-0">{homeNoError}</p>
                  )}
                </div>
                {/* zip code */}
                <div>
                  {" "}
                  <input
                    value={zip}
                    onChange={handleZIP}
                    placeholder="ZIP Code"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      zipError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {zipError && (
                    <p className="text-sm text-red-500 mt-0">{zipError}</p>
                  )}
                </div>
                {/*citx  */}
                <div>
                  <input
                    value={city}
                    onChange={handleCity}
                    placeholder="City"
                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                      cityError ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {cityError && (
                    <p className="text-sm text-red-500 mt-0">{cityError}</p>
                  )}
                </div>
              </div>
              <label className="flex items-center gap-2 mt-2 text-sm">
                <input
                  type="checkbox"
                  name="useinfo"
                  onChange={handleUseinfo}
                />{" "}
                Use same address for billing
              </label>
            </div>
          )}

          {/* --- Payment --- */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {/* Card */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-gray-400 shadow-md"
                    : "hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Radio + Icon */}
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <FaCreditCard size={26} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="font-medium">Credit / Debit Card</p>

                    {paymentMethod === "card" && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-74 md:w-120">
                        <input
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="Card Number"
                          className="col-span-1 sm:col-span-2 border px-3 py-2 rounded-md focus:outline-none"
                        />

                        <input
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          placeholder="MM / YY"
                          className="w-full border px-3 py-2 rounded-md focus:outline-none"
                        />

                        <input
                          value={cvc}
                          onChange={(e) => setCVC(e.target.value)}
                          placeholder="CVC"
                          className="border px-3 py-2 rounded-md focus:outline-none"
                        />

                        <input
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          placeholder="Cardholder Name"
                          className="col-span-1 sm:col-span-2 border px-3 py-2 rounded-md focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </label>

              {/* PayPal */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer ${
                  paymentMethod === "paypal" ? "border-gray-400 shadow-md" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="flex-1">
                  <FaPaypal size={24} color="#003087" />
                  <p className="font-medium">PayPal</p>
                  {paymentMethod === "paypal" && (
                    // <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md">
                    //   Continue with PayPal
                    // </button>
                    <input
                      type="text"
                      value={paypalAcout}
                      onChange={(e) => setPaypalAcount(e.target.value)}
                      className="mt-2 w-full border px-3 py-2 rounded-md focus:outline-none"
                    />
                  )}
                </div>
              </label>

              {/* Google Pay */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer ${
                  paymentMethod === "googlepay"
                    ? "border-gray-400 shadow-md"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="googlepay"
                  checked={paymentMethod === "googlepay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="flex-1">
                  <SiGooglepay size={24} color="#4285F4" />
                  <p className="font-medium">Google Pay</p>
                  {paymentMethod === "googlepay" && (
                    // <button className="mt-2 w-full bg-black text-white py-2 rounded-md">
                    //   Pay with Google Pay
                    // </button>
                    <input
                      type="text"
                      value={googlepayNumber}
                      onChange={(e) => setGooglepayNumber(e.target.value)}
                      className="mt-2 w-full border px-3 py-2 rounded-md focus:outline-none"
                    />
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* --- Note --- */}
          <div className="mt-6">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" /> Add a note to your order
            </label>
            <textarea
              placeholder="Special instructions..."
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          {/* --- Place Order Button --- */}
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <a href="/cart" className="text-sm text-gray-600 hover:underline">
              ← Return to Cart
            </a>
            <button
              // onClick={() => navigate("/receivedOrder")}
              onClick={handlePlaceOrder}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-black"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* ==================== SUMMARY ==================== */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItem}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {totalPrice}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Total</span>
              <span>$ {totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
