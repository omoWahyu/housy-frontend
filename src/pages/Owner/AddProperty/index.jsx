import React from "react";
import Layout from "../../../components/layouts/withoutSearchbar";
import { Form, Container, Col, Button } from "react-bootstrap";

import css from "./index.module.css";

export default function AddProperty() {
	const cities = [
		{ value: "-" },
		{ value: "Jakarta" },
		{ value: "Bandung" },
		{ value: "Medan" },
	];
	const period = [
		{ value: "-" },
		{ value: "Day" },
		{ value: "Week" },
		{ value: "Month" },
		{ value: "Year" },
	];
	const nums = [
		{ value: "-" },
		{ value: 1 },
		{ value: 2 },
		{ value: 3 },
		{ value: 4 },
		{ value: 5 },
	];
	return (
		<Layout>
			<div className={css.MaxWidth}>
				<h2 className='fw-bold my-5 pt-5'>Incoming Transaction</h2>
				<Form className='fw-bold'>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Name Property</Form.Label>
						<Form.Control
							size='lg'
							id='name-property'
							name='name-property'
							type='text'
							className='bg-tertiary'
							autoFocus
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>City</Form.Label>
						<Form.Select
							size='lg'
							id='cities'
							name='cities'
							type='text'
							className='bg-tertiary'
						>
							{cities.map((e) => {
								return <option>{e.value}</option>;
							})}
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							size='lg'
							as='textarea'
							rows={3}
							id='address'
							name='address'
							type='text'
							className='bg-tertiary'
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							size='lg'
							id='price'
							name='price'
							type='text'
							className='bg-tertiary'
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Type of Rent</Form.Label>
						<Form.Select
							size='lg'
							id='cities'
							name='cities'
							type='text'
							className='bg-tertiary'
						>
							{period.map((e) => {
								return <option>{e.value}</option>;
							})}
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Amenities</Form.Label>
						<div
							className='d-flex gap-5'
							style={{ fontWeight: "500", fontSize: "1.2rem" }}
						>
							<Form.Check
								//   style={{ fontWeight: "300", fontSize: "1.2rem" }}
								type='check'
								id='furnished'
								label='Furnished'
							/>
							<Form.Check
								//   style={{ fontWeight: "300", fontSize: "1.2rem" }}
								type='check'
								id='pet-allowed'
								label='Pet Allowed'
							/>
							<Form.Check
								//   style={{ fontWeight: "500", fontSize: "1.2rem" }}
								type='check'
								id='shared-accomodation'
								label='Shared Acconodation'
							/>
						</div>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Bed Room</Form.Label>
						<Form.Select
							size='lg'
							id='bed-room'
							name='bed-room'
							type='text'
							className='bg-tertiary'
						>
							{nums.map((e) => {
								return <option>{e.value}</option>;
							})}
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Bath Room</Form.Label>
						<Form.Select
							size='lg'
							id='bath-room'
							name='bath-room'
							type='text'
							className='bg-tertiary'
						>
							{nums.map((e) => {
								return <option>{e.value}</option>;
							})}
						</Form.Select>
					</Form.Group>
					<Col className='d-flex mb-5 justify-content-end'>
						<Button size='lg' type='submit' className='click px-5 py-2'>
							Save
						</Button>
					</Col>
				</Form>
			</div>
		</Layout>
	);
}
