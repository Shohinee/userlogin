/** @format */

import * as Yup from "yup";
export const addUpdateSchema = Yup.object({
	firstname: Yup.string()
		.min(2)
		.max(25)
		.required("Please Enter your firstname"),
	lastname: Yup.string().min(2).max(25).required("Please Enter your lastname"),
	email: Yup.string().email().required("Enter your Email"),
	password: Yup.string().min(6).required("Enter your Password"),
	city: Yup.string().min(2),
	zipcode: Yup.string().min(2),
	phone: Yup.string().min(10).max(14),
});
