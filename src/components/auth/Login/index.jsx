import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import RegisterModal from "../Register";

const LoginModal = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = {
			username: username,
			password: password,
		};
		localStorage.setItem("user", JSON.stringify(user));
	};

	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			{/* <Modal.Header closeButton> */}
			{/* <Modal.Title id='contained-modal-title-vcenter' className=''>
					<strong className='text-center'>Login</strong>
				</Modal.Title> */}
			{/* </Modal.Header> */}
			<Modal.Body className='m-3'>
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign in</h1>
				<Form onSubmit={handleSubmit}>
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
							type='submit'
							className='mt-4 py-3 px-4 w-100'
							// onClick={startFind}
							// onClick={user}
						>
							Apply
						</Button>
					</Form.Group>

					<Form.Text id='passwordHelpBlock' muted>
						Don't have an acount? Click{" "}
						<span closeButton onclick='call the new div here'>
							here
						</span>
					</Form.Text>
				</Form>
			</Modal.Body>
			{/* <Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer> */}
		</Modal>
	);
};

export default LoginModal;
