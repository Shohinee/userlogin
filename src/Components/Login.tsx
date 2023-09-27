/** @format */

import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
	let [userName, setUserName] = useState("");
	let [password, setPassword] = useState("");
	const navigate = useNavigate();
	const checkData = () => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let raw = JSON.stringify({ username: userName, password: password });

		let requestOptions: any = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		};
		fetch("https://fakestoreapi.com/auth/login", requestOptions)
			.then((response) => {
				if (response.status == 200) {
					return response.json();
				} else {
					alert("Incorrect UserName or Password");
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
	};

	return (
		<form>
			<div className="login">
				<h3>Welcome</h3>
				<input
					id="usrNam"
					type="text"
					placeholder="UserName"
					onChange={(event) => {
						setUserName(event.target.value);
					}}
					// value={userName}
				/>
				<input
					id="pas"
					type="password"
					placeholder="Password"
					onChange={(event) => {
						setPassword(event.target.value);
					}}
					// value={password}
				/>
				<button type="button" onClick={checkData}>
					Login
				</button>
				<button type="reset">Reset</button>
			</div>
		</form>
	);
}
