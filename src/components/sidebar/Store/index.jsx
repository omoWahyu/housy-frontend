import React from "react";
import { Button, InputGroup, Form, Stack, Row, Col } from "react-bootstrap";
import { HiCalendar } from "react-icons/hi2";

export default function Sidebar(props) {
	return (
		<>
			<aside className={props.className} style={props.style}>
				<Form>
					<Stack gap={4} style={{ marginTop: "5rem" }}>
						<div className="">
							<h4 className="mb-3">
								<strong>Type of Rent</strong>
							</h4>

							<div className="d-flex gap-5">
								<Button variant={props.color} size="lg" className="w-100">
									Dark
								</Button>
								<Button variant={props.color} size="lg" className="w-100">
									Dark
								</Button>
								<Button
									variant={props.color}
									size="lg"
									className="w-100"
									active
								>
									Dark
								</Button>
							</div>
						</div>

						<div className="">
							<h4 className="">
								<strong>Date</strong>
							</h4>

							<div className="d-flex gap-5">
								<InputGroup size="lg" className="mb-3">
									<InputGroup.Text id="inputGroup-sizing-sm">
										<HiCalendar />
									</InputGroup.Text>
									<Form.Control
										type="date"
										aria-label="Small"
										aria-describedby="inputGroup-sizing-sm"
									/>
								</InputGroup>
							</div>
						</div>

						<Stack gap={3}>
							<h4 className="mb-3">
								<strong>Property Room</strong>
							</h4>
							<div className="">
								<span>Bedroom</span>
								<div className="d-flex gap-3 mt-2">
									<Button variant={props.color} className="w-100">
										1
									</Button>
									<Button variant={props.color} className="w-100">
										2
									</Button>
									<Button variant={props.color} className="w-100" active>
										3
									</Button>
									<Button variant={props.color} className="w-100">
										4
									</Button>
									<Button variant={props.color} className="w-100">
										5+
									</Button>
								</div>
							</div>
							<div className="">
								<span>Bathroom</span>
								<div className="d-flex gap-3 mt-2">
									<Button variant={props.color} className="w-100">
										1
									</Button>
									<Button variant={props.color} className="w-100" active>
										2
									</Button>
									<Button variant={props.color} className="w-100">
										3
									</Button>
									<Button variant={props.color} className="w-100">
										4
									</Button>
									<Button variant={props.color} className="w-100">
										5+
									</Button>
								</div>
							</div>
						</Stack>

						<div className="">
							<h4 className="">
								<strong>Amenities</strong>
							</h4>

							<div className="d-flex flex-column">
								<div className="d-flex justify-content-between">
									<Form.Label
										htmlFor="amenities-checkbox"
										className="text-secondary"
									>
										Your vanity URL
									</Form.Label>
									<Form.Check
										reverse
										type="checkbox"
										id={`amenities-checkbox`}
									/>
								</div>
								<div className="d-flex justify-content-between">
									<Form.Label
										htmlFor="amenities-checkbox"
										className="text-secondary"
									>
										Your vanity URL
									</Form.Label>
									<Form.Check
										reverse
										type="checkbox"
										id={`amenities-checkbox`}
									/>
								</div>
								<div className="d-flex justify-content-between">
									<Form.Label
										htmlFor="amenities-checkbox"
										className="text-secondary"
									>
										Your vanity URL
									</Form.Label>
									<Form.Check
										reverse
										type="checkbox"
										id={`amenities-checkbox`}
									/>
								</div>
							</div>
						</div>

						<div className="">
							<h4 className="">
								<strong>Budget</strong>
							</h4>

							<Form.Group
								as={Row}
								className="mb-3 d-flex align-items-center"
								controlId="formHorizontalEmail"
							>
								<Form.Label column sm={5}>
									Less than IDR.
								</Form.Label>
								<Col sm={7}>
									<Form.Control
										type="number"
										placeholder="Price Range"
										size="lg"
									/>
								</Col>
							</Form.Group>
						</div>
						<Form.Group className="ms-auto">
							<Button size="lg" className="px-4" type="submit">
								Apply
							</Button>
						</Form.Group>
					</Stack>
				</Form>
			</aside>
		</>
	);
}
