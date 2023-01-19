import React, { useState } from "react";
import logo from "../../assets/icons/Logo.svg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LoginModal from "../auth/Login";

import {
	// Container,
	Navbar,
	Nav,
	Button,
	// NavDropdown,
	InputGroup,
	Form,
	// Row,
	// Col,
} from "react-bootstrap";
import css from "./header.module.css";

export default function Header(props) {
	const [loginModal, setLoginModal] = useState(false);

	return (
		<Navbar style={props.style} expand='lg' className={props.className}>
			{/* <Container className=""> */}
			<Navbar.Brand href='#home' className={css.navbarBrand}>
				<img src={logo} alt='' height={64} />
			</Navbar.Brand>

			<Navbar.Toggle
				aria-controls='basic-navbar-nav'
				className='ms-auto me-4'
			/>
			<Navbar.Collapse id='basic-navbar-nav' className=''>
				<Form className='d-flex'>
					<InputGroup className={css.inputGroup}>
						<Form.Control
							size='lg'
							placeholder='Search'
							aria-label='Search'
							aria-describedby='basic-addon1'
							className='ms-4 border-0 border-end bg-tertiary'
						/>
						<Button variant='outline-primary border-0 border-start bg-tertiary'>
							<HiMagnifyingGlass fontSize={24} strokeWidth={2} />
						</Button>
					</InputGroup>
				</Form>
				<Nav className='ms-auto px-4 d-flex gap-2'>
					<Button size='lg' variant='light' onClick={() => setLoginModal(true)}>
						Sign In
					</Button>
					<Button size='lg' variant='tertiary'>
						Sign Up
					</Button>
				</Nav>
			</Navbar.Collapse>

			<LoginModal show={loginModal} onHide={() => setLoginModal(false)} />
			{/* </Container> */}
		</Navbar>
	);
}
