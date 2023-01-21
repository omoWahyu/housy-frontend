import React from 'react'
import { Routes, Route } from "react-router-dom";

// Page
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import History from "./pages/History";
import PrivateRoute from "./lib/PrivateRoute"

import DataRooms from "./data/rooms";

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail room={DataRooms} />} />
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
