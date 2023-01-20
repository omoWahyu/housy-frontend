import { Modal, Button, Form } from "react-bootstrap";

import css from "./modal.module.css";

function orderModal(props) {
	return (
		<Modal {...props} size='md' centered>
			<Modal.Body className={css.Modal}>
				<h2 className='text-center mt-3 mb-5 fw-bold'>
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
							placeholder='Fullname'
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
							placeholder='Fullname'
							className='bg-tertiary'
							name='fullname'
							// value={isRegistered.fullname}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default orderModal;
