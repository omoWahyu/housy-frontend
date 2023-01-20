import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import Layout from "../../components/layouts/withoutSearchbar";
import OrderModal from "../../components/Transaction/Modal";

import css from "./myBooking.module.css";
const MyBooking = () => {
	const [orderModal, setLoginModal] = useState(false);
	return (
		<Layout className={"bg-tertiary"}>
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
								<span className={css.ImageMore}>test</span>
								<Image
									src={process.env.PUBLIC_URL + "/img/rooms/image6.png"}
									className={css.PrimaryImage}
								/>
							</div>
						</div>
					</div>
					<div className='d-block'>
						<h1>House Astina</h1>
						<div className='d-flex'>
							<div>
								<h3>Rp.9.000.000 / Year</h3>
								<p>
									Jl. Elang IV Perum Permata Bintaro Residence, Pondok
									Aren,Tangerang Selatan
								</p>
							</div>
							<div>
								<div className=''>
									<span>Bedrooms</span> <b>3</b>
								</div>
								<div className=''>
									<span>Bathrooms</span> <b>3</b>
								</div>
								<div className=''>
									<span>Area</span> <b>1800 sqft</b>
								</div>
							</div>
						</div>
						<div className=''>
							<h3>Description</h3>
							<p>
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
					</div>
					<div className='w-100'>
						<div className='ms-auto w-100'>
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
