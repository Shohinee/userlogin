/** @format */

import { useState } from "react";

import "./App.css";
import Login from "./Components/Login";
import UserTable from "./Components/UserTable";
import AppRouter from "./Components/AppRouter";
import AddUpdate from "./Components/form/addUpdate";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <AddUpdate /> */}
			<AppRouter />
		</>
	);
}

export default App;
