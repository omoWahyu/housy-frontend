import React from "react";
import Layout from "../../../components/layouts/withoutSearchbar";
// import { useParams } from "react-router-dom";

import css from "./index.module.css";

export default function Home() {
	return (
		<Layout>
			<div className={css.MaxWidth}>Hello</div>
		</Layout>
	);
}
