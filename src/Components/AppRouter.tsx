/** @format */

// import React from "react";
import UserTable from "./UserTable";
import { Route, Routes } from "react-router-dom";
import table from "./table";
import Modal from "./Modal";
import Login from "./Login";
import AddUpdate from "./form/addUpdate";

export default function AppRouter() {
	return (
		<div>
			<Routes>
				<Route path="/login" Component={Login} />
				{/* <securedLayout/> */}
				<Route element={<UserTable />}>
					<Route path="/" Component={table} />
					<Route path="/edit/:id" Component={AddUpdate} />
				</Route>
			</Routes>
		</div>
	);
}
