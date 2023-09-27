/** @format */
import { useEffect, useState } from "react";
import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { addUpdateSchema } from "./form/schemas/addUpdateSchema";

export default function UserTable() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const addUser = (gId: any) => {
		if (gId) {
			fetch("https://fakestoreapi.com/users", {
				method: "POST",
				body: JSON.stringify({
					id: gId.id,
					email: gId.email,
					password: gId.password,
					name: {
						firstname: gId.firstname,
						lastname: gId.lastname,
					},
					address: {
						city: gId.city,
						zipcode: gId.zipcode,
					},
					phone: gId.phone,
				}),
			})
				.then((res) => res.json())
				.then((json) => console.log(json));
			// console.log(gId);

			handleClose();
		} else alert("Put thr values");
	};
	//check token in useEffect if token not found then redirect to navegate("/login")
	useEffect(() => {
		if (sessionStorage.getItem("token") === null) {
			navigate("/login");
		}
	}, []);

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
	return (
		<div className="UserTable">
			<div className="SideNavBar">
				<img
					src="https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg"
					alt="userIcon"
					className="image"
				/>
			</div>
			<div className="table">
				<div className="nav">
					<div>
						<Button variant="primary" onClick={handleShow}>
							Add User
						</Button>

						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>Add New User</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Formik
									initialValues={{ ...initialValues }}
									onSubmit={(value) => {
										addUser(value);
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
												{errors.email && touched.email ? (
													<p>{errors.email}</p>
												) : null}
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
												{errors.city && touched.city ? (
													<p>{errors.city}</p>
												) : null}
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
												{errors.phone && touched.phone ? (
													<p>{errors.phone}</p>
												) : null}
											</Form.Group>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
											<Button variant="primary" type="submit">
												Add
											</Button>
										</Form>
									)}
								</Formik>
							</Modal.Body>
						</Modal>
					</div>

					<button
						onClick={() => {
							sessionStorage.removeItem("token");
							navigate("/login");
						}}>
						logout
					</button>
				</div>
				<Outlet />
			</div>
		</div>
	);
}
