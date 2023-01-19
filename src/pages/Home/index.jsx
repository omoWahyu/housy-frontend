import React, { useState } from "react";
import LayoutStore from "../../components/layouts/Store";
import DataRooms from "../../data/rooms";
import { DisplayedRoom } from "../../common/DisplayedRoom";
// import css from "home.module.css";
import Sidebar from "../../components/sidebar/Store";
import css from "./home.module.css";

export default function Home() {
	// const [data, setData] = useState({ Rooms });

	const [filters, setFilters] = useState(DataRooms);

	const updateFilters = (searchParams) => {
		setFilters(searchParams);
		console.log(DataRooms);
	};

	const filterData = (DataRooms) => {
		const filteredData = [];

		if (!filters.bed) {
			return DataRooms;
		}
		for (const rooms of DataRooms) {
			// if (filters.duration !== "" && rooms.duration !== filters.duration) {
			// 	continue;
			// }
			// if (filters.date !== "" && rooms.date !== filters.date) {
			// 	continue;
			// }
			if (filters.bed !== "" && rooms.bed !== filters.bed) {
				continue;
			}
			if (filters.bath !== "" && rooms.bath !== filters.bath) {
				continue;
			}
			// if (filters.amenities !== "" && rooms.amenities !== filters.amenities) {
			// 	continue;
			// }
			if (filters.budget !== 0 && rooms.budget !== filters.budget) {
				continue;
			}
			filteredData.push(DataRooms);
		}
		console.log("halo", filteredData);
		console.log("halo", DataRooms);
		return filteredData;
	};

	return (
		<LayoutStore className={"bg-tertiary"}>
			{/* <Container> */}
			<div className="" style={{ marginTop: "5.5rem" }}>
				<div>
					<Sidebar
						color={"tertiary"}
						SearchRoom={updateFilters}
						className="fixed-top z-1 bg-light"
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
						<div className="p-lg-4">
							<div className="row row-cols-1 row-cols-xl-3">
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
