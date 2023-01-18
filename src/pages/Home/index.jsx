import React from "react";
import LayoutStore from "../../components/layouts/Store";
import data from "../../data/rooms";
import { Card } from "react-bootstrap";
import { conqurency } from "../../lib/math";
export default function Home() {
	return (
		<LayoutStore>
			<div>
				<ul>
					<div className="row row-cols-3">
						{data.map((r) => {
							return (
								<div className="col">
									<Card className="mb-4 mt-3 mx-1 rounded-4">
										<span className="position-absolute px-3 py-1 bg-white rounded-2 fs-6 mt-3 ms-3">
											Furnished
										</span>
										<Card.Img
											variant="top"
											className="p-2"
											src={process.env.PUBLIC_URL + "/img/" + r.imageUrl}
										/>
										<Card.Body>
											<Card.Title>
												<strong>{conqurency(r.roomCost)}</strong>
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
