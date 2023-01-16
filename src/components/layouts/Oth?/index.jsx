import Header from "../../Header";
export default function Store({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
