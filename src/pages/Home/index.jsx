import React, { useState } from "react";
import LayoutStore from "../../components/layouts/Store";
import DataRooms from "../../data/rooms";
import { DisplayedRoom } from "../../components/card/Store";
// import css from "home.module.css";
import Sidebar from "../../components/sidebar/Store";

import css from "./home.module.css";

export default function Home() {
	// const [data, setData] = useState({ Rooms });

	const [filters, setFilters] = useState({});

	const updateFilters = (searchRoom) => {
		setFilters(searchRoom);
		console.log("test", searchRoom);
	};

	const filterData = (DataRooms) => {
		// console.log("filtered", filterData);
		const filteredData = DataRooms.filter((room) => {
			// if (filters.dration === "year") {
			// 	return false;
			// }
			if (filters.bed && room.bed !== filters.bed) {
				return false;
			}
			if (filters.bath && room.bath !== filters.bath) {
				return false;
			}
			if (filters.budget && room.cost > filters.budget) {
				return false;
			}
			// if (filters.amenities && room.amenities !== filters.amenities) {
			// 	return false;
			// }
			return true;
		});
		console.log("filtered", filteredData);
		return filteredData;
	};

	return (
		<LayoutStore className={"bg-tertiary"}>
			{/* <Container> */}
			<div className=''>
				<div>
					<Sidebar
						color={"tertiary"}
						SearchRoom={updateFilters}
						className='fixed-top z-1 bg-light'
						style={{
							width: "32rem",
							height: "100vh",
							padding: "9rem 3rem 0rem 3rem",
							zIndex: "19",
							overflow: "auto",
						}}
					/>
				</div>
				<div>
					<section className={css.MainContent}>
						<div className='p-lg-4'>
							<div className='row row-cols-1 row-cols-xl-3'>
								<DisplayedRoom
									Rooms={filterData(DataRooms)}
									className={"mb-4 mt-3 mx-1 rounded-4"}
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
			{/* </Container> */}
		</LayoutStore>
	);
}
