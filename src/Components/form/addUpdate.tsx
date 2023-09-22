/** @format */

import { useFormik } from "formik";
// import React from "react";

import { Button, Form } from "react-bootstrap";
import { number } from "yup";
import { addUpdateSchema } from "./schemas/addUpdateSchema";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	city: "",
	zipcode: "",
	phone: "",
};
export default function AddUpdate() {
	const { id } = useParams();
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: addUpdateSchema,
			onSubmit: (values) => {
				console.log("clicked");
				console.log(values.firstname);
			},
		});
	useEffect(() => {});
	return (
		<div className="addUserForm">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						placeholder="Firstname"
						name="firstname"
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
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.zipcode && touched.zipcode ? <p>{errors.zipcode}</p> : null}
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						placeholder="Phone"
						name="phone"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
