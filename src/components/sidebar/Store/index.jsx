import React, { useState } from "react";
import {
	ToggleButton,
	Button,
	// ButtonGroup,
	InputGroup,
	Form,
	Stack,
	Row,
	Col,
} from "react-bootstrap";
import { HiCalendar } from "react-icons/hi2";

export default function Sidebar(props) {
	// const [checked, setChecked] = useState(false);
	const [durValue, setDurValue] = useState("3");
	const [dateValue, setDateValue] = useState("");
	const [bedValue, setBedValue] = useState("3");
	const [bathValue, setBathValue] = useState("2");
	const [amenitiesValue, setAmenitiesValue] = useState("1");
	const [budgetValue, setBudgetValue] = useState("0");

	const startFind = () => {
		props.SearchRooms({
			duration: durValue,
			date: dateValue,
			bed: bedValue,
			bath: bathValue,
			amenities: amenitiesValue,
			budget: budgetValue,
		});
	};
	const dur = [
		{ name: "Day", value: "1" },
		{ name: "Month", value: "2" },
		{ name: "Year", value: "3" },
	];
	const bed = [
		{ name: "1", value: "1" },
		{ name: "2", value: "2" },
		{ name: "3", value: "3" },
		{ name: "4", value: "4" },
		{ name: "5+", value: "5" },
	];

	const bath = [
		{ name: "1", value: "1" },
		{ name: "2", value: "2" },
		{ name: "3", value: "3" },
		{ name: "4", value: "4" },
		{ name: "5+", value: "5" },
	];

	const amenities = [
		{ name: "Furnished", value: "1" },
		{ name: "Pet Allowed", value: "2" },
		{ name: "Shared Accomodation", value: "3" },
	];
	return (
		<>
			<aside className={props.className} style={props.style}>
				<Form>
					<Stack gap={4} className="mb-5">
						<div className="">
							<h4 className="mb-3">
								<strong>Type of Rent</strong>
							</h4>

							<div className="d-flex gap-5">
								{dur.map((dur, id) => (
									<ToggleButton
										key={id}
										size="lg"
										id={`dur-${id}`}
										type="radio"
										variant={durValue === dur.value ? "primary" : "tertiary"}
										name="dur"
										value={dur.value}
										checked={durValue === dur.value}
										onChange={(e) => setDurValue(e.currentTarget.value)}
										className={"w-100"}
									>
										{dur.name}
									</ToggleButton>
								))}
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
										onChange={(e) => setDateValue(e.currentTarget.value)}
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
									{bed.map((bed, id) => (
										<ToggleButton
											key={id}
											id={`bed-${id}`}
											type="radio"
											variant={bedValue === bed.value ? "primary" : "tertiary"}
											name="bed"
											value={bed.value}
											checked={bedValue === bed.value}
											onChange={(e) => setBedValue(e.currentTarget.value)}
											className={"w-100"}
										>
											{bed.name}
										</ToggleButton>
									))}
								</div>
							</div>
							<div className="">
								<span>Bathroom</span>
								<div className="d-flex gap-3 mt-2">
									{bath.map((bath, id) => (
										<ToggleButton
											key={id}
											id={`bath-${id}`}
											type="radio"
											variant={
												bathValue === bath.value ? "primary" : "tertiary"
											}
											name="bath"
											value={bath.value}
											checked={bathValue === bath.value}
											onChange={(e) => setBathValue(e.currentTarget.value)}
											className={"w-100"}
										>
											{bath.name}
										</ToggleButton>
									))}
								</div>
							</div>
						</Stack>

						<div className="">
							<h4 className="">
								<strong>Amenities</strong>
							</h4>

							<div className="d-flex flex-column">
								{amenities.map((amenities, id) => (
									<div key={id} className="d-flex justify-content-between">
										<Form.Label
											htmlFor={`amenities-${id}`}
											className="text-secondary"
										>
											{amenities.name}
										</Form.Label>

										<Form.Check
											reverse
											type="checkbox"
											value={amenities.value}
											id={`amenities-${id}`}
											checked={amenitiesValue === amenities.value}
											onChange={(e) => setAmenitiesValue(e.currentTarget.value)}
										/>
									</div>
								))}
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
										onChange={(e) => setBudgetValue(e.currentTarget.value)}
									/>
								</Col>
							</Form.Group>
						</div>
						<Form.Group className="ms-auto">
							<Button
								size="lg"
								className="px-4"
								type="button"
								onClick={startFind}
							>
								Apply
							</Button>
						</Form.Group>
					</Stack>
				</Form>
			</aside>
		</>
	);
}
