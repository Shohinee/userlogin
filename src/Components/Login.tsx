/** @format */

import React, { useState } from "react";
import "../App.css";
import UserTable from "./UserTable";
import { useNavigate } from "react-router-dom";
export default function Login() {
	const [userName, setUserName] = useState("mor_2314");
	const [password, setPassword] = useState("83r5^_");
	const navigate = useNavigate();
	const requestBody = {
		// username: "mor_2314",
		// password: "83r5^_",
		username: userName,
		password: password,
	};

	const checkData = () => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let raw = JSON.stringify(requestBody);

		let requestOptions: any = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		};

		fetch("https://fakestoreapi.com/auth/login", requestOptions)
			.then((response) => {
				if (response.status == 200) {
					// response.text();
					return response.json();
				} else {
					throw Error(response.statusText);
				}
			})
			.then((result) => {
				//store the token
				sessionStorage.setItem("token", result.token);
				navigate("/");
			})
			.catch((error) => {
				console.log("error", error);
			});
		console.log(requestBody);
	};

	return (
		<div className="login">
			<h3>Welcome</h3>
			<input
				type="text"
				placeholder="UserName"
				onChange={(event) => {
					setUserName(event.target.value);
				}}
				value={userName}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={(event) => {
					setPassword(event.target.value);
				}}
				value={password}
			/>
			<button type="button" onClick={checkData}>
				Login
			</button>
			<button type="reset">Reset</button>
		</div>
	);
}
