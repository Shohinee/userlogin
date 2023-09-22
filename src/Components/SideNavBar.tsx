/** @format */

// import React from "react";
import { useState } from "react";
import "../App.css";
export default function SideNavBar() {
	const [allUser, setAllUser] = useState([]);
	const fetchData = () => {
		fetch("https://fakestoreapi.com/users")
			.then((res) => res.json())
			.then((json) => setAllUser(json));
	};
	console.log(allUser);
	return (
		<div className="SideNavBar">
			<button type="button" onClick={fetchData}>
				User
			</button>
		</div>
	);
}
