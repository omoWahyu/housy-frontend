import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import Layout from "../../components/layouts/withoutSearchbar";
import OrderModal from "../../components/Transaction/Modal";

import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import css from "./myBooking.module.css";
const MyBooking = () => {
	const [orderModal, setLoginModal] = useState(false);
	return (
		<Layout className={"bg-white"}>
			<div className=''>
				<div className={css.MaxWidth}>
					<div className='d-flex flex-column gap-3 w-100'>
						<div className={css.WrapperPrimaryImage}>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image2.png"}
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
						<h1 className={css.BookingTitle}>House Astina</h1>
						<div className={css.BookingDesc}>
							<div>
								<h3 className='fw-bold'>Rp.9.000.000 / Year</h3>
								<p className='text-secondary' style={{ width: "360px" }}>
									Jl. Elang IV Perum Permata Bintaro Residence, Pondok
									Aren,Tangerang Selatan
								</p>
							</div>
							<div className=' d-flex gap-3'>
								<div className='fw-semibold'>
									<small className='text-secondary'>Bedrooms</small>
									<span className='d-flex align-items-center gap-2 fs-4'>
										3 <IoBed />
									</span>
								</div>
								<div className='fw-semibold'>
									<small className='text-secondary'>Bathrooms</small>{" "}
									<span className='d-flex align-items-center gap-2 fs-4'>
										3 <GiBathtub />
									</span>
								</div>
								<div className='fw-semibold'>
									<small className='text-secondary'>Area</small>{" "}
									<span className='d-flex align-items-center gap-2 fs-4'>
										1800 sqft
									</span>
								</div>
							</div>
						</div>
						<div className=''>
							<h3 className='fw-bold'>Description</h3>
							<p className='text-secondary'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.
							</p>
						</div>
						<div className='d-flex w-100 justify-content-end'>
							<Button
								size='lg'
								variant='primary'
								className='px-5 py-2'
								onClick={() => setLoginModal(true)}
								// onClick={() => setRegisterModal(true)}
							>
								BOOK NOW
							</Button>
						</div>
					</div>
					{/* <Link to='/'>back to home</Link> */}
				</div>

				<OrderModal
					show={orderModal}
					// gotoregister={gotoRegistration}
					onHide={() => setLoginModal(false)}
				/>
			</div>
		</Layout>
	);
};

export default MyBooking;
