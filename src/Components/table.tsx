/** @format */

import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

export default function table() {
	const [allUser, setAllUser] = useState([]);
	const navigate = useNavigate();

	const deleteUser = (id: number) => {
		fetch(`https://fakestoreapi.com/users/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	const EditPage = (id: number) => {
		// console.log("edited");
		navigate(`/edit/${id}`);
	};

	useEffect(() => {
		fetch("https://fakestoreapi.com/users")
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				setAllUser(json);
			});
	}, []);

	return (
		<div className="table">
			<table className="table">
				<thead>
					<tr>
						<th>SI No</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Password</th>
						<th>Address</th>
						<th>Phone No</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{allUser.length > 0
						? allUser.map((item: any, index: any) => (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.name.firstname}</td>
									<td>{item.name.lastname}</td>
									<td>{item.email}</td>
									<td>{item.password}</td>
									<td>{item.address.city}</td>
									<td>{item.phone}</td>
									<td>
										<button onClick={() => EditPage(item.id)} className="edit">
											Edit
										</button>
									</td>
									<td>
										<button
											className="delete"
											type="button"
											onClick={() => {
												deleteUser(item.id);
											}}>
											Delete
										</button>
									</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	);
}
