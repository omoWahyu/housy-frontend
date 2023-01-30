import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "layouts/withSearchbar";
import Modal from "components/Modals/Booking";

import { Button, Image, Table } from "react-bootstrap";
import logo from "assets/icons/Logo.svg";
import Stepper from "assets/icons/Stepper.svg";

import css from "./index.module.css";
import { conqurency } from "lib/math";

import moment from "moment/moment";
export default function MyBooking() {
	const [showModal, setShowModal] = useState();

	const user = JSON.parse(localStorage.getItem("isLogin"));
	const users = JSON.parse(localStorage.getItem("userData")).find(
		(obj) => obj.username === user.username
	);

	const checkHistory = JSON.parse(localStorage.getItem("BookingData"));

	const RegistingHistory = (e) => {
		const registingUser = {
			fullname: users.fullname,
			username: users.username,
			gender: users.gender,
			phone: users.phone,
			NetCost: user.Rooms.cost,
			RoomName: user.Rooms.name,
			StreetName:
				user.Rooms.streetAddress +
				", " +
				user.Rooms.districtAddress +
				", " +
				user.Rooms.townAddress,
			checkin: moment(user.checkin).format("DD MMMM YYYY"),
			checkout: moment(user.checkout).format("DD MMMM YYYY"),
			TOR: user.Rooms.TOR,
			amenities: user.Rooms.amenities,
			status: "Pending",
		};

		if (localStorage.getItem("BookingData")) {
			localStorage.setItem(
				"BookingData",
				JSON.stringify([...checkHistory, registingUser])
			);
		} else {
			localStorage.setItem("BookingData", JSON.stringify([registingUser]));
		}
		setShowModal(true);
	};

	return (
		<Layout className='bg-tertiary'>
			<div className=''>
				<div className={css.MaxWidth}>
					{user.checkin !== "" ? (
						<div className={css.Card}>
							<div className='d-flex justify-content-between'>
								<div className={css.CardLeft}>
									<Image src={logo} alt='Logo' className={css.ImgLogo} />
									<div className='d-flex gap-3 align-items-center'>
										<div className='pe-4'>
											<h2>{user.Rooms.name}</h2>
											<p style={{ width: "19.5rem" }}>
												{user.Rooms.streetAddress}, {user.Rooms.districtAddress}
												, {user.Rooms.townAddress}
											</p>
											<span className={css.Badge}>Waiting Payment</span>
										</div>
										<div
											style={{ width: "14rem" }}
											className='d-flex align-items-center gap-4'
										>
											<div className=''>
												<Image src={Stepper} width={16} />
											</div>
											<div className='d-flex flex-column gap-4'>
												<div>
													<strong className='d-block'>Checkin</strong>
													<span className='text-secondary'>
														{moment(user.checkin).format("DD MMMM YYYY")}
													</span>
												</div>
												<div>
													<strong className='d-block'>Checkout</strong>
													<span className='text-secondary'>
														{moment(user.checkout).format("DD MMMM YYYY")}
													</span>
												</div>
											</div>
										</div>
										<div className=''>
											<div>
												<strong className='d-block'>Amenities</strong>
												<ul>
													{user.Rooms.amenities.map((x, k) => {
														return (
															<li key={k} className='text-secondary'>
																{x}
															</li>
														);
													})}
												</ul>
											</div>
											<div>
												<strong className='d-block'>Type of rent</strong>
												<span className='text-secondary ps-4'>
													{user.Rooms.TOR}
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className={css.CardRight}>
									<div>
										<h1 className='fw-bold'>Booking</h1>

										<p>
											<strong>{moment(user.checkin).format("dddd")}</strong>,{" "}
											{moment(user.checkin).format("DD MMMM YYYY")}
										</p>
									</div>
									<div className={css.WrapperCardImage}>
										<Image
											className={css.CardImage}
											src={process.env.PUBLIC_URL + "/img/Uploads/receipt.png"}
										/>
									</div>
									<small className='text-secondary'>Upload payment proof</small>
								</div>
							</div>
							<div className=''>
								<Table className='mt-4 mb-5'>
									<thead>
										<tr>
											<th>No</th>
											<th>Full Name</th>
											<th>Gender</th>
											<th>Phone</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr className='text-secondary'>
											<td>1</td>
											<td>{users.fullname}</td>
											<td>{users.gender}</td>
											<td>{users.phone}</td>
											<td className='fw-semibold text-black'>
												Long Time Rent : 1 Year
											</td>
										</tr>
										<tr>
											<td colSpan='4'></td>
											<td className='fw-semibold' style={{ width: "18rem" }}>
												total <span style={{ padding: "0 2.45rem" }}></span> :{" "}
												<span className='text-danger'>
													{conqurency(user.Rooms.cost)}
												</span>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className=''>
								<div className='d-flex justify-content-end'>
									<Button
										type='button'
										onClick={RegistingHistory}
										className={"btn btn-primary fw-bold fs-5 ms-auto"}
										style={{ padding: "1rem 6rem" }}
									>
										PAY
									</Button>
								</div>
							</div>
						</div>
					) : (
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ minHeight: "90vh" }}
						>
							<div className='text-center bg-white rounded-4 p-5 shadow'>
								<h2>Booking Kosong</h2>
								<p>Silahkan lakukan checkin terlebih dahulu</p>
								<Link to='/' className='btn btn-primary px-4 py-2 mt-2'>
									Kembali
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>

			<Modal
				show={showModal}
				// gotoregister={gotoRegistration}
				onHide={() => setShowModal(false)}
			/>
		</Layout>
	);
}
