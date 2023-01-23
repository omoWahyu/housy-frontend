import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { redirect } from "react-router-dom";
// import RegisterModal from "../Register";

const LoginModal = (props) => {
	const LoginSubmit = (e) => {
		e.preventDefault();
		const loginUser = {
			username: e.target.username.value,
			password: e.target.password.value,
			role: "",
			checkin: "",
			checkout: "",
			Rooms: "",
			payment: "",
		};
		const checkLogin = JSON.parse(localStorage.getItem("userData") || []);

		if (!loginUser.username) {
			alert("Form Username is required!");
		}
		if (!loginUser.password) {
			alert("Form Password is required!");
		} else if (
			checkLogin.find((userData) => userData.username === loginUser.username)
		) {
			alert("Berhasil Login");

			const user = JSON.parse(localStorage.getItem("userData") || []).find(
				(obj) => obj.username === loginUser.username
			);
			props.onHide();
			loginUser.role = user.role;
			localStorage.setItem("isLogin", JSON.stringify(loginUser));
			if (user.role === "Owner") {
				window.location.href = "/";
			}
			// redirect("/");
		} else if (!checkLogin) {
			alert("Your Account is not Registered!");
		} else {
			alert("Username or Password is invalid");
		}
	};

	const goRegister = () => {
		props.onHide();
		props.toRegister();
	};

	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Body className='m-3'>
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign in</h1>
				<Form onSubmit={LoginSubmit}>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='username' className='fw-bold fs-4'>
							Username
						</Form.Label>
						<Form.Control
							size='lg'
							type='text'
							id='username'
							placeholder='Username'
							className='bg-tertiary'
							name='username'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='Password' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='Password'
							placeholder='Password'
							className='bg-tertiary'
							name='password'
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button size='lg' type='submit' className='mt-4 py-3 px-4 w-100'>
							Sign in
						</Button>
					</Form.Group>

					<Form.Text id='passwordHelpBlock' muted>
						Don't have an acount? Click
						<span
							onClick={(e) => goRegister()}
							className={"btn btn-link pb-2 px-1"}
						>
							here
						</span>
					</Form.Text>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default LoginModal;
