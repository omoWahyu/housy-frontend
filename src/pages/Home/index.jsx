import React from "react";
import LayoutStore from "../../components/layouts/Store";
import data from "../../data/rooms";
import { Card } from "react-bootstrap";
export default function Home() {
	return (
		<LayoutStore>
			<div>
				<ul>
					<div className="row row-cols-3">
						{data.Rooms.map((r) => {
							return (
								<div className="col">
									<Card className="mb-4 mt-3 mx-1 rounded-4">
										<span className="position-absolute px-3 py-1 bg-white rounded-2 fs-6 mt-2 ms-2">
											Furnished
										</span>
										<Card.Img
											variant="top"
											src={process.env.PUBLIC_URL + "/img/" + r.imageUrl}
										/>
										<Card.Body>
											<Card.Title>
												<strong>{r.roomCost}</strong>
											</Card.Title>
											<Card.Subtitle className="mb-2">
												{r.bedRoom} Beds, {r.bathRoom} Bath, {r.roomSize} Sqft
											</Card.Subtitle>
											<Card.Text>
												{r.roomTownAddress}, {r.roomDistrictAddress}
											</Card.Text>
											{/* <Button variant="primary">Go somewhere</Button> */}
										</Card.Body>
									</Card>
								</div>
							);
						})}
					</div>
				</ul>
			</div>
		</LayoutStore>
	);
}
