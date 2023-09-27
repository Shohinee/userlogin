/** @format */

import { Formik } from "formik";

import { Button, Form } from "react-bootstrap";
import { addUpdateSchema } from "./schemas/addUpdateSchema";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const initialValues = {
	id: "",
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	city: "",
	zipcode: "",
	phone: "",
};
type valueType = {
	id?: number;
	email?: string;
	username?: string;
	password?: string;
	name?: {
		firstname?: string;
		lastname?: string;
	};
	address?: {
		city?: string;
		zipcode?: string;
	};
	phone?: string;
};

export default function AddUpdate() {
	const { id } = useParams();
	const [data, setData] = useState<valueType>({});

	const defaultValue = {
		id: data?.id,
		firstname: data?.name?.firstname,
		lastname: data?.name?.lastname,
		email: data?.email,
		password: data?.password,
		city: data?.address?.city,
		zipcode: data?.address?.zipcode,
		phone: data?.phone,
	};
	const navigate = useNavigate();
	useEffect(() => {
		fetch(`https://fakestoreapi.com/users/${id}`)
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			})
			.catch((err) => console.log("The error is : ", err));
	}, []);
	const update = (value: any) => {
		fetch(`https://fakestoreapi.com/users/${id}`, {
			method: "PUT",
			body: JSON.stringify({
				id: value.id,
				email: value.email,

				password: value.password,
				name: {
					firstname: value.firstname,
					lastname: value.lastname,
				},
				address: {
					city: value.city,

					zipcode: value.zipcode,
				},
				phone: value.phone,
			}),
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};
	return (
		<div className="addUserForm">
			<Formik
				initialValues={{ ...initialValues, ...defaultValue }}
				onSubmit={(value) => {
					update(value);
					console.log(value);
				}}
				validationSchema={addUpdateSchema}
				enableReinitialize>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="ID"
								value={values.id || ""}
								name="id"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.lastname && touched.lastname ? (
								<p>{errors.lastname}</p>
							) : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="Firstname"
								name="firstname"
								value={values.firstname || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.firstname && touched.firstname ? (
								<p>{errors.firstname}</p>
							) : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="Lastname"
								name="lastname"
								value={values.lastname || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.lastname && touched.lastname ? (
								<p>{errors.lastname}</p>
							) : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="email"
								placeholder="Enter email"
								name="email"
								value={values.email || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && touched.email ? <p>{errors.email}</p> : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="password"
								placeholder="Password"
								name="password"
								value={values.password || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && touched.password ? (
								<p>{errors.password}</p>
							) : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="City"
								name="city"
								value={values.city || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.city && touched.city ? <p>{errors.city}</p> : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="Zipcode"
								name="zipcode"
								value={values.zipcode || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.zipcode && touched.zipcode ? (
								<p>{errors.zipcode}</p>
							) : null}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="Phone"
								name="phone"
								value={values.phone || ""}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
						</Form.Group>

						<div className="buttons">
							<Button
								variant="primary"
								type="submit"
								onClick={() => navigate("/")}>
								Back
							</Button>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
