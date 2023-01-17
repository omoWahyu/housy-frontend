import Header from "../../Header";
import Sidebar from "../../sidebar/Store";
// import { Container } from "react-bootstrap";
export default function Store({ children }) {
	return (
		<div className="bg-light">
			<Header style={{ zIndex: "20" }} className={"bg-light fixed-top z-2"} />
			{/* <Container> */}
			<div className="" style={{ marginTop: "5.5rem" }}>
				<div>
					<Sidebar
						color={"tertiary"}
						className="fixed-top z-1 bg-light p-5"
						style={{ width: "32rem", height: "100vh", zIndex: "19" }}
					/>
				</div>
				<div>
					<section
						className="overflow-hidden"
						style={{
							marginLeft: "34rem",
						}}
					>
						<div className="bg-tertiary p-4">{children}</div>
					</section>
				</div>
			</div>
			{/* </Container> */}
		</div>
	);
}
