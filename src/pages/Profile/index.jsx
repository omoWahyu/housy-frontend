import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/layouts/withSearchbar";
const Profile = () => {
	return (
		<Layout className='bg-tertiary'>
			this is Profile
			<br />
			<Link to='/'>back to home</Link>
		</Layout>
	);
};

export default Profile;
