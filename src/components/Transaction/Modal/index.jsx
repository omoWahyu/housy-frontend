import { Modal, Button, Form } from "react-bootstrap";

import css from "./modal.module.css";

function orderModal(props) {
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
							type='text'
							id='fullname'
							placeholder='Checkin'
							className='bg-tertiary'
							name='fullname'
							// value={isRegistered.fullname}
						/>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='fullname' className='fw-bold fs-4'>
							Check-out
						</Form.Label>
						<Form.Control
							autoFocus
							size='lg'
							type='text'
							id='fullname'
							placeholder='Checkout'
							className='bg-tertiary'
							name='fullname'
							// value={isRegistered.fullname}
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
}

export default orderModal;
