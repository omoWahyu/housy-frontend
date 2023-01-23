import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

import Layout from "../../../components/layouts/withoutSearchbar";
import OrderModal from "../../../components/Modals/Detail";

import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import css from "./index.module.css";

export default function Detail(props) {
	const [showModal, setShowModal] = useState(false);
	const { id } = useParams();

	return (
		<Layout className={"bg-white"}>
			<div className={css.MaxWidth}>
				<div className='d-flex flex-column gap-3 w-100'>
					<div className={css.WrapperPrimaryImage}>
						<Image
							src={
								process.env.PUBLIC_URL + "/img/rooms/" + props.room[id].imageUrl
							}
							className={css.PrimaryImage}
						/>
					</div>
					<div className='d-flex gap-3'>
						<div className={css.WrapperSubImage}>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image3.png"}
								className={css.PrimaryImage}
							/>
						</div>
						<div className={css.WrapperSubImage}>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image7.png"}
								className={css.PrimaryImage}
							/>
						</div>
						<div className={css.WrapperSubImage}>
							<span className={css.ImageMore}>+5</span>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image6.png"}
								className={css.PrimaryImage}
							/>
						</div>
					</div>
				</div>
				<div className={css.WrappingBookingDesc}>
					<h1 className={css.BookingTitle}>{props.room[id].name}</h1>
					<div className={css.BookingDesc}>
						<div>
							<h3 className='fw-bold'>
								{props.room[id].cost} / {props.room[id].TOR}
							</h3>
							<p className='text-secondary' style={{ width: "360px" }}>
								{props.room[id].streetAddress}, {props.room[id].districtAddress}
								, {props.room[id].townAddress}
							</p>
						</div>
						<div className=' d-flex gap-3'>
							<div className='fw-semibold'>
								<small className='text-secondary'>Bedrooms</small>
								<span className='d-flex align-items-center gap-2 fs-4'>
									{props.room[id].bed} <IoBed />
								</span>
							</div>
							<div className='fw-semibold'>
								<small className='text-secondary'>Bathrooms</small>{" "}
								<span className='d-flex align-items-center gap-2 fs-4'>
									{props.room[id].bath} <GiBathtub />
								</span>
							</div>
							<div className='fw-semibold'>
								<small className='text-secondary'>Area</small>{" "}
								<span className='d-flex align-items-center gap-2 fs-4'>
									{props.room[id].size} sqft
								</span>
							</div>
						</div>
					</div>
					<div className=''>
						<h3 className='fw-bold'>Description</h3>
						<p className='text-secondary'>{props.room[id].desc}</p>
					</div>
					<div className='d-flex w-100 justify-content-end'>
						<Button
							size='lg'
							variant='primary'
							className='px-5 py-2'
							onClick={() => setShowModal(true)}
							// onClick={() => setRegisterModal(true)}
						>
							BOOK NOW
						</Button>
					</div>
					{/* <Link to='/'>back to home</Link> */}
				</div>

				<OrderModal
					show={showModal}
					roomID={props.room[id]}
					// gotoregister={gotoRegistration}
					onHide={() => setShowModal(false)}
				/>
			</div>
		</Layout>
	);
}
