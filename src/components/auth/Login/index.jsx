import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import RegisterModal from "../Register";

const LoginModal = (props) => {
	const [isLogin, setIsLogin] = useState({
		username: "",
		password: "",
	});

	const LoginSubmit = (e) => {
		// e.preventDefault();
		const checkLogin = JSON.parse(localStorage.getItem("userData")) || [];

		if (!isLogin.username) {
			alert("Form Username is required!");
		}
		if (!isLogin.password) {
			alert("Form Password is required!");
		} else if (
			checkLogin.find((userData) => userData.username === isLogin.username)
		) {
			alert("Berhasil Login");
			props.onHide();
			localStorage.setItem("isLogin", JSON.stringify(isLogin));
		} else if (!checkLogin) {
			alert("Your Account is not Registered!");
		} else {
			alert("Username or Password is invalid");
		}
	};

	const goRegister = () => {
		props.onHide();
		props.gotoregister();
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
							name='username'
							value={isLogin.username}
							onChange={(e) =>
								setIsLogin({
									...isLogin,
									[e.target.name]: e.target.value,
								})
							}
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
							value={isLogin.password}
							onChange={(e) =>
								setIsLogin({
									...isLogin,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='button'
							className='mt-4 py-3 px-4 w-100'
							onClick={LoginSubmit}
						>
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
