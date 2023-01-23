import React from 'react'
import { Routes, Route } from "react-router-dom";

// Mutual Pages
import Home from "./pages/Mutual/Home";
import Profile from "./pages/Mutual/Profile";
import Detail from "./pages/Mutual/Detail";

// Tenant Pages
import MyBooking from "./pages/Tenant/MyBooking";
import History from "./pages/Tenant/History";

// Owner Pages
import OwnerHome from "./pages/Owner/Home";
import AddProperty from "./pages/Owner/AddProperty";
import OwnerHistory from "./pages/Owner/History";

// Login Checking
import IsLogin from "./lib/IsLogin"

// Err
import ErrNoMatch from "./pages/error"

// Data
import DataRooms from "./data/rooms";

const isLogin = JSON.parse(localStorage.getItem("isLogin"));

function App() {

	return (
		<Routes>
			{isLogin && isLogin.role === "Owner" ? (
				<>
					<Route path="/" element={<OwnerHome />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/addproperty" element={<AddProperty />} />
					<Route path="/history" element={<OwnerHistory />} />
				</>
			) : (
				<>
					<Route path="/" element={<Home />} />
					<Route path="/detail/:id" element={<Detail room={DataRooms} />} />
					<Route path="/" element={<IsLogin />} >
						<Route path="/profile" element={<Profile />} />
						<Route path="/mybooking" element={<MyBooking />} />
						<Route path="/history" element={<History />} />
					</Route>
				</>
			)}
			<Route path="*" element={<ErrNoMatch />} />
		</Routes >
	);
}

export default App;
