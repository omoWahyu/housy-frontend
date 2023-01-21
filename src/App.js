import React from 'react'
import { Routes, Route } from "react-router-dom";

// Page
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyBooking from "./pages/MyBooking";
import History from "./pages/History";
import PrivateRoute from "./lib/PrivateRoute"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mybooking" element={<MyBooking />} />
				<Route path="/" element={<PrivateRoute />} >
					<Route path="/profile" element={<Profile />} />
					<Route path="/history" element={<History />} />
				</Route>
			</Routes>
			{/* <Home /> */}
		</>
	);
}

export default App;
