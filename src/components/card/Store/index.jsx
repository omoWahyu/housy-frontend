import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { conqurency } from "../../../lib/math";

function DisplayedRoom(props) {
	console.log("data showed", props.Rooms);
	return (
		<>
			{props.Rooms.map((room, k) => {
				return (
					<Link
						to={"/detail/" + k}
						key={k}
						className='w-100'
						style={{ textDecoration: "none" }}
					>
						<Card className={props.className}>
							<div className='position-absolute mt-3 ms-3 d-flex gap-2'>
								{room.amenities.map((amenity, k) => (
									<span key={k} className='px-3 py-1 bg-white rounded-2 fs-6'>
										{amenity}
									</span>
								))}
							</div>
							<Card.Img
								variant='top'
								className='p-2'
								src={process.env.PUBLIC_URL + "/img/rooms/" + room.imageUrl}
							/>
							<Card.Body>
								<Card.Title>
									<strong>{conqurency(room.cost)} / room.TOR</strong>
								</Card.Title>
								<Card.Subtitle className='mb-2'>
									{room.bed} Beds, {room.bath} Bath, {room.size} Sqft
								</Card.Subtitle>
								<Card.Text>
									{room.townAddress}, {room.districtAddress}
								</Card.Text>
								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</Link>
				);
			})}
		</>
	);
}

export { DisplayedRoom };
