import React from "react";
import logo from "../../Logo.svg";
import { HiMagnifyingGlass } from "react-icons/hi2";

import {
	Container,
	Navbar,
	Nav,
	Button,
	NavDropdown,
	InputGroup,
	Form,
	Row,
	Col,
} from "react-bootstrap";

export default function Header() {
	return (
		<Navbar style={{ backgroundColor: "white" }} expand="lg">
			<Container>
				<Row className="w-100 d-flex align-items-center">
					<Col xs={12} md={4} className="d-flex justify-items-between">
						<Navbar.Brand href="#home" className="m-0">
							<img src={logo} alt="" height={64} />
						</Navbar.Brand>

						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							className="ms-auto"
						/>
					</Col>
					<Col xs={12} md={8} className="d-flex align-items-center">
						<Navbar.Collapse id="basic-navbar-nav" className="w-100 w-md-auto">
							<InputGroup style={{ width: "20rem" }}>
								<Form.Control
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
								<InputGroup.Text id="basic-addon1">
									<HiMagnifyingGlass fontSize={24} />
								</InputGroup.Text>
							</InputGroup>
							<Nav className="ms-auto">
								<Button variant="light" disabled>
									Sign In
								</Button>{" "}
								<Button variant="light">Sign Up</Button>{" "}
							</Nav>
						</Navbar.Collapse>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
}
