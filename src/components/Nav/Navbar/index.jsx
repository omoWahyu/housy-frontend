import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegUser, FaRegCalendar } from "react-icons/fa";
import { TbHistory } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";

import { Image } from "react-bootstrap";

// Components
import LoginModal from "../../Modals/auth/Login";
import logo from "../../../assets/icons/Logo.svg";
import RegisterModal from "../../Modals/auth/Register";

import {
	Navbar,
	Nav,
	Button,
	InputGroup,
	Form,
	Dropdown,
} from "react-bootstrap";
import css from "./header.module.css";

export default function Header(props) {
	const [loginModal, setLoginModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);

	const isLogin = JSON.parse(localStorage.getItem("isLogin"));
	const profilImage = process.env.PUBLIC_URL + "/img/Profile/";
	const redirect = useNavigate();

	const isLogout = () => {
		localStorage.removeItem("isLogin");
		alert("Logout Success, Bye👋");

		if (isLogin.role === "Owner") {
			window.location.href = "/";
		} else {
			redirect("/");
		}
	};
	return (
		<>
			<Navbar style={props.style} expand='xxl' className={props.className}>
				{/* <Container className=""> */}
				<div className={css.MaxWidth}>
					<Navbar.Brand className={css.NavbarBrand}>
						<Link to='/'>
							<img src={logo} alt='' height={64} />
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						className='ms-auto me-4'
					/>
					<Navbar.Collapse id='basic-navbar-nav' className=''>
						{props.useSearchBar !== false ? (
							<Form className='d-flex'>
								<InputGroup className={css.InputGroup}>
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
						) : (
							<div></div>
						)}
						<Nav className='ms-auto px-4 d-flex gap-2'>
							{localStorage.getItem("isLogin") == null ? (
								<>
									<Button
										size='lg'
										variant='light'
										onClick={() => setLoginModal(true)}
									>
										Sign In
									</Button>
									<Button
										size='lg'
										variant='tertiary'
										onClick={() => setRegisterModal(true)}
									>
										Sign Up
									</Button>
								</>
							) : (
								<Dropdown className={css.Dropdown}>
									<Dropdown.Toggle className={css.Toggle}>
										{isLogin && isLogin.role === "Owner" ? (
											<Image
												className={css.ToggleImage}
												src={profilImage + "owner.webp"}
											/>
										) : (
											<Image
												className={css.ToggleImage}
												src={profilImage + "tenant.webp"}
											/>
										)}
										{/* <Image
										className={css.ToggleImage}
										src={"https://github.com/hyujisf.png"}
									/> */}
									</Dropdown.Toggle>

									<Dropdown.Menu align='end' className={css.DropdownMenu}>
										<Dropdown.Item
											as={Link}
											to='/profile'
											className={css.DropMenu}
										>
											<div className='rounded-pill bg-tertiary'>
												<FaRegUser className='m-2 text-primary' />
											</div>
											<span className='fs-5 fw-medium'>Profile</span>
										</Dropdown.Item>
										<Dropdown.Item
											as={Link}
											to='/mybooking'
											className={css.DropMenu}
										>
											<div className='rounded-pill bg-tertiary'>
												<FaRegCalendar className='m-2 text-primary' />
											</div>
											<span className='fs-5 fw-medium'>My Booking</span>
										</Dropdown.Item>
										<Dropdown.Item
											as={Link}
											to='/history'
											className={css.DropMenu}
										>
											<div className='rounded-pill bg-tertiary'>
												<TbHistory className='m-2 text-primary' />
											</div>
											<span className='fs-5 fw-medium'>History</span>
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item onClick={isLogout} className={css.DropMenu}>
											<div className='rounded-pill bg-tertiary'>
												<IoLogOut className='m-2 text-primary' />
											</div>
											<span className='fs-5 fw-medium'>Logout</span>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							)}
						</Nav>
					</Navbar.Collapse>

					{/* </Container> */}
				</div>
			</Navbar>

			<LoginModal
				show={loginModal}
				toRegister={() => setRegisterModal(true)}
				onHide={() => setLoginModal(false)}
			/>
			<RegisterModal
				show={registerModal}
				toLogin={() => setLoginModal(true)}
				onHide={() => setRegisterModal(false)}
			/>
		</>
	);
}
