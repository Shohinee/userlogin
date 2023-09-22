/** @format */
import { useEffect, useState } from "react";
import "../App.css";
// import React from "react";
import SideNavBar from "./SideNavBar";
import { Outlet, useNavigate } from "react-router-dom";

export default function UserTable() {
	//check token in useEffect if token not found then redirect to navegate("/login")
	const navigate = useNavigate();
	useEffect(() => {
		if (sessionStorage.getItem("token") === null) {
			navigate("/login");
		}
	}, []);
	return (
		<div className="UserTable">
			<div className="SideNavBar">
				<button type="button">User</button>
			</div>
			<div className="table">
				<div className="nav">
					<button className="addUser">Add User</button>
				</div>
				<Outlet />
			</div>
		</div>
	);
}
