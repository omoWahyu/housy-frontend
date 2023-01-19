import { Button, Modal, Form } from "react-bootstrap";
import LoginModal from "../Login";

const RegisterModal = (props) => {
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
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign up</h1>
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

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='button'
							className='mt-4 py-3 px-4 w-100'
							// onClick={startFind}
						>
							Apply
						</Button>
					</Form.Group>

					<Form.Text id='passwordHelpBlock' muted>
						Don't have an acount? Click{" "}
						<span onClick={props.onHide} show={RegisterModal} to=''>
							here
						</span>
					</Form.Text>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default RegisterModal;
