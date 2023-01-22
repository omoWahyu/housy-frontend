import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

// Page
import Home from "./pages/Home";
import OwnerHome from "./pages/Owner/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import MyBooking from "./pages/Tenant/MyBooking";
import History from "./pages/Tenant/History";
import IsLogin from "./lib/IsLogin"
import ErrNoMatch from "./pages/error/NoMatch"

import DataRooms from "./data/rooms";

function App() {

	// const redirect = useNavigate()
	// const isLogin = JSON.parse(localStorage.getItem("isLogin"));
	// const user = JSON.parse(localStorage.getItem("userData")).find(
	// 	(obj) => obj.username === isLogin.username
	// );
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/detail/:id" element={<Detail room={DataRooms} />} />
			<Route path="/" element={<IsLogin />} >
				<Route path="/profile" element={<Profile />} />
				<Route path="/mybooking" element={<MyBooking />} />
				<Route path="/history" element={<History />} />
			</Route>
			<Route path="*" element={<ErrNoMatch />} />
		</Routes>

	);
}

export default App;
