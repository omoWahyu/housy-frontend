import { Card } from "react-bootstrap";
import { conqurency } from "../lib/math";

function DisplayedRoom(props) {
	return (
		<>
			{props.Rooms.map((room, id) => {
				return (
					<div key={id} className="col">
						<Card className="mb-4 mt-3 mx-1 rounded-4">
							<div className="position-absolute mt-3 ms-3 d-flex gap-2">
								{room.amenities.map((amenity, id) => (
									<span key={id} className="px-3 py-1 bg-white rounded-2 fs-6">
										{amenity}
									</span>
								))}
							</div>
							<Card.Img
								variant="top"
								className="p-2"
								src={process.env.PUBLIC_URL + "/img/" + room.imageUrl}
							/>
							<Card.Body>
								<Card.Title>
									<strong>{conqurency(room.cost)}</strong>
								</Card.Title>
								<Card.Subtitle className="mb-2">
									{room.bed} Beds, {room.bath} Bath, {room.size} Sqft
								</Card.Subtitle>
								<Card.Text>
									{room.townAddress}, {room.districtAddress}
								</Card.Text>
								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</>
	);
}

export { DisplayedRoom };
