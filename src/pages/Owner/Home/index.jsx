import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { RxMagnifyingGlass } from "react-icons/rx";

import Layout from "../../../components/layouts/withoutSearchbar";
import VerifyModal from "../../../components/Modals/VerifyTransaction";
import css from "./index.module.css";

export default function Home() {
	const [verifyModal, setVerifyModal] = useState(false);
	const Book = JSON.parse(localStorage.getItem("BookingData"));
	let id;
	return (
		<Layout>
			<div className={css.MaxWidth}>
				<h2 className='fw-bold my-5 pt-5'>Incoming Transaction</h2>
				<Table hover size='lg' className={css.TableData}>
					<thead>
						<tr>
							<th>No</th>
							<th>Users</th>
							<th>Type of Rent</th>
							<th>Bukti Transfer</th>
							<th>Status Payment</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{Book ? (
							<>
								{Book.map((b, i) => {
									id = i;
									return (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{b.fullname}</td>
											<td>{b.TOR}</td>
											<td>bni.jpg</td>
											{b.status === "Pending" ? (
												<td className={css.TextWarning}>Pending</td>
											) : (
												<>
													{b.status === "Approved" ? (
														<td className={css.TextSuccess}>Approved</td>
													) : (
														<td className={css.TextDanger}>Cancel</td>
													)}
												</>
											)}
											<td>
												<span onClick={() => setVerifyModal(true)}>
													<RxMagnifyingGlass className={css.IconButton} />
												</span>
											</td>
										</tr>
									);
								})}
								<VerifyModal
									TransactionID={id}
									show={verifyModal}
									onHide={() => setVerifyModal(false)}
								/>
							</>
						) : (
							<tr>
								{" "}
								<td colSpan={6} className='text-center'>
									Data Kosong
								</td>
							</tr>
						)}
					</tbody>
				</Table>
			</div>
		</Layout>
	);
}
