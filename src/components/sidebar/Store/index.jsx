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
	const [durationVal, setDuration] = useState("3");
	const [dateVal, setDate] = useState("");
	const [bedVal, setBed] = useState("3");
	const [bathVal, setBath] = useState("3");
	const [amenitiesVal, setAmenities] = useState("1");
	const [budgetVal, setBudget] = useState(10000);

	const startFind = () => {
		props.SearchRoom({
			duration: durationVal,
			date: dateVal,
			bed: bedVal,
			bath: bathVal,
			amenities: amenitiesVal,
			budget: budgetVal,
		});
	};
	console.log(durationVal, bedVal, bathVal, amenitiesVal, budgetVal);

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
								{dur.map((dur, idk) => (
									<ToggleButton
										key={idk}
										size="lg"
										id={`dur-${idk}`}
										type="radio"
										variant={durationVal === dur.value ? "primary" : "tertiary"}
										name="dur"
										value={dur.value}
										checked={durationVal === dur.value}
										onChange={(e) => setDuration(e.target.checked)}
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
										onChange={(e) => setDate(e.target.checked)}
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
											variant={bedVal === bed.value ? "primary" : "tertiary"}
											name="bed"
											value={bed.value}
											checked={bedVal === bed.value}
											onChange={(e) => setBed(e.target.value)}
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
											variant={bathVal === bath.value ? "primary" : "tertiary"}
											name="bath"
											value={bath.value}
											checked={bathVal === bath.value}
											onChange={(e) => setBath(e.target.value)}
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
											checked={amenitiesVal === amenities.value}
											onChange={(e) => setAmenities(e.target.value)}
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
										value={budgetVal}
										onChange={(e) => setBudget(e.target.value)}
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
