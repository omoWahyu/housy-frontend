import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import RegisterModal from "../Register";

const LoginModal = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	let isLogin = {
		username: username,
		password: password,
	};
	const LoginSubmit = (e) => {
		// e.preventDefault();
		const checkLogin = JSON.parse(localStorage.getItem("isRegistered"));

		if (!isLogin.username) {
			alert("Form Username is required!");
		}
		if (!isLogin.password) {
			alert("Form Password is required!");
		} else if (
			checkLogin.password !== isLogin.password ||
			checkLogin.fullname !== isLogin.username
		) {
			alert("Username or Password is invalid");
		} else if (
			checkLogin.password === isLogin.password &&
			checkLogin.fullname === isLogin.username
		) {
			alert("Berhasil Login");
			props.onHide();
			localStorage.setItem("isLogin", JSON.stringify(isLogin));
		} else {
			alert("Your Account is not Registered!");
		}
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
				<Form>
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
							aria-describedby='passwordHelpBlock'
							onChange={(e) => setUsername(e.target.value)}
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
							aria-describedby='passwordHelpBlock'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='button'
							className='mt-4 py-3 px-4 w-100'
							onClick={LoginSubmit}
						>
							Apply
						</Button>
					</Form.Group>

					<Form.Text id='passwordHelpBlock' muted>
						Don't have an acount? Click <span>here</span>
					</Form.Text>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default LoginModal;
