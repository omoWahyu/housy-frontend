import React, { useState } from "react";
import LayoutStore from "../../components/layouts/withSearchbar";
import DataRooms from "../../data/rooms";
import { DisplayedRoom } from "../../components/card/Store";
// import css from "home.module.css";
import Sidebar from "../../components/Nav/Sidebar/Store";

import css from "./home.module.css";

export default function Home() {
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
			<div className={css.MaxWidth}>
				<div>
					<Sidebar SearchRoom={updateFilters} className={css.SideItem} />
				</div>
				<div>
					<section className={css.MainWithSidebar}>
						<div className='p-lg-4'>
							<div className={css.RoomsDisplay}>
								<DisplayedRoom
									Rooms={filterData(DataRooms)}
									className={css.RoomLink}
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
