import React, { useState } from "react";
import moment from "moment";
import { Modal, Button, Form } from "react-bootstrap";

import css from "./modal.module.css";

const OrderModal = (props) => {
	const [checkIn, setCheckIn] = useState(moment());
	const [checkOut, setCheckOut] = useState(moment());
	return (
		<Modal {...props} size='md' centered>
			<Modal.Body className={css.Modal}>
				<h2 className='text-center mt-3 mb-3 fw-bold'>
					How long you will stay
				</h2>
				<Form className={css.Form}>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='fullname' className='fw-bold fs-4'>
							Check-in
						</Form.Label>
						<Form.Control
							autoFocus
							size='lg'
							type='date'
							id='fullname'
							placeholder='Checkin'
							className='bg-tertiary'
							name='fullname'
							// value={isRegistered.fullname}
							onChange={(e) => setCheckIn(moment(e.target.value))}
							value={checkIn.format("DD-MM-YYYY")}
						/>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='fullname' className='fw-bold fs-4'>
							Check-out
						</Form.Label>
						<Form.Control
							autoFocus
							size='lg'
							type='date'
							id='fullname'
							placeholder='Checkout'
							className='bg-tertiary'
							name='fullname'
							// value={isRegistered.fullname}
							onChange={(e) => setCheckOut(moment(e.target.value))}
							value={checkOut.format("DD-MM-YYYY")}
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='button'
							className='mt-4 py-3 px-4 w-100'
							// onClick={RegistSubmit}
						>
							Order
						</Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default OrderModal;
