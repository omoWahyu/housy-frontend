import React from "react";
import Header from "../../Header";
// import { Container } from "react-bootstrap";
export default function Store({ children }) {
	return (
		<div className="bg-light">
			<Header style={{ zIndex: "20" }} className={"bg-light fixed-top z-2"} />
			{children}
		</div>
	);
}
