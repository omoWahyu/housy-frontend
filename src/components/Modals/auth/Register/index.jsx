import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

import css from "./Register.module.css";

const RegisterModal = (props) => {
	// const [isRegistered, setIsRegistered] = useState([]);

	const checkData = JSON.parse(localStorage.getItem("userData"));

	const RegistSubmit = (e) => {
		e.preventDefault();

		if (!e.target.fullname.value) {
			alert("Form Fullname is required!");
		}
		if (!e.target.username.value) {
			alert("Form Username is required!");
		} else {
			// Get data
			const registingUser = {
				fullname: e.target.fullname.value,
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
				role: e.target.list.value,
				gender: e.target.gender.value,
				phone: e.target.phone.value,
				address: e.target.address.value,
			};

			// Set user Image
			registingUser.role === "Tenant"
				? (registingUser.picture = "tenant.webp")
				: (registingUser.picture = "owner.webp");

			console.log("Registing User", registingUser);
			console.log("current Registered Data", checkData);
			
			if (localStorage.getItem("userData")) {
				localStorage.setItem(
					"userData",
					JSON.stringify([...checkData, registingUser])
				);
			} else {
				localStorage.setItem("userData", JSON.stringify([registingUser]));
			}
			alert("Registration successful!");
			props.onHide();
			props.toLogin();
		}
		if (!e.target.email.value) {
			alert("Form Email is required!");
		}
		if (!e.target.password.value) {
			alert("Form Password is required!");
		}
		if (!e.target.list.value) {
			alert("Form List As is required!");
		}
		if (!e.target.gender.value) {
			alert("Form Gender At is required!");
		}
		if (!e.target.phone.value) {
			alert("Form Phone At is required!");
		}
		if (!e.target.address.value) {
			alert("Form Address At is required!");
		}
	};
	const ListAsData = [{ value: "Tenant" }, { value: "Owner" }];
	const GenderData = [{ value: "Laki-laki" }, { value: "Perempuan" }];
	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Body className={css.Modal}>
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign up</h1>
				<Form className={css.Form} onSubmit={RegistSubmit}>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='fullname' className='fw-bold fs-4'>
							Full Name
						</Form.Label>
						<Form.Control
							autoFocus
							size='lg'
							type='text'
							id='fullname'
							placeholder='Fullname'
							className='bg-tertiary'
							name='fullname'
						/>
					</Form.Group>

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
						<Form.Label htmlFor='email' className='fw-bold fs-4'>
							Email
						</Form.Label>
						<Form.Control
							size='lg'
							type='email'
							id='email'
							placeholder='Email'
							className='bg-tertiary'
							name='email'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='password' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='password'
							placeholder='Password'
							className='bg-tertiary'
							name='password'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='list' className='fw-bold fs-4'>
							List As
						</Form.Label>
						<Form.Select
							size='lg'
							id='list'
							name='list'
							className='bg-tertiary'
						>
							<option>--Choose--</option>
							{ListAsData.map((option, idk) => (
								<option key={idk} value={option.value}>
									{option.value}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='gender' className='fw-bold fs-4'>
							Gender
						</Form.Label>
						<Form.Select
							size='lg'
							id='gender'
							name='gender'
							className='bg-tertiary'
						>
							<option>--Choose--</option>
							{GenderData.map((option, idk) => (
								<option key={idk} value={option.value}>
									{option.value}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='phone' className='fw-bold fs-4'>
							Phone
						</Form.Label>
						<Form.Control
							size='lg'
							type='text'
							id='phone'
							placeholder='Phone'
							className='bg-tertiary'
							name='phone'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='address' className='fw-bold fs-4'>
							Address
						</Form.Label>
						<Form.Control
							size='lg'
							as='textarea'
							rows='4'
							id='address'
							placeholder='Address'
							name='address'
							// value={isRegistered.address}
							className='bg-tertiary'
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='submit'
							className='mt-4 py-3 px-4 w-100'
							// onClick={RegistSubmit}
						>
							Sign up
						</Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default RegisterModal;
