import { Button, Modal, Form } from "react-bootstrap";

const LoginModal = (props) => {
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
			<Modal.Body>
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign in</h1>
				<Form>
					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Label htmlFor='inputPassword5' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='inputPassword5'
							className='bg-tertiary'
							aria-describedby='passwordHelpBlock'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Label htmlFor='inputPassword5' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='inputPassword5'
							className='bg-tertiary'
							aria-describedby='passwordHelpBlock'
						/>
					</Form.Group>

					<Form.Group className='ms-auto'>
						<Button
							size='lg'
							type='button'
							className='px-4'
							onClick={startFind}
						>
							Apply
						</Button>
					</Form.Group>

					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Label htmlFor='inputPassword5' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='inputPassword5'
							className='bg-tertiary'
							aria-describedby='passwordHelpBlock'
						/>
					</Form.Group>
					<Form.Text id='passwordHelpBlock' muted>
						Your password must be 8-20 characters long, contain letters and
						numbers, and must not contain spaces, special characters, or emoji.
					</Form.Text>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
