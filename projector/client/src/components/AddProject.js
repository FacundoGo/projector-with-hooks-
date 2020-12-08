import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { DataContext } from "../contexts/DataContext";

const AddProject = ({ getData }) => {
	const [greeting, setGreeting] = useState("hello from the state");
	// const [title, setTitle] = useState("");
	// const [description, setDescription] = useState("");
	const [{ title, description }, setValues] = useState({
		title: "",
		description: "",
	});
	// state = {
	//   title: '',
	//   description: ''
	// }

	const { name, setName } = useContext(DataContext);

	console.log(name);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues((prevState) => ({ ...prevState, [name]: value }));
		// if (name === "title") {
		// 	setTitle(value);
		// }

		// if (name === "description") {
		// 	setDescription(value);
		// }
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);
		axios
			.post("/api/projects", {
				title: title,
				description: description,
			})
			.then(() => {
				// set the form to it's initial state (empty input fields)
				setValues({ title: "", description: "" });
				// setTitle("");
				// setDescription("");
				// update the parent components state (in Projects) by calling getData()
				getData();
			})
			.catch((err) => console.log(err));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Button onClick={() => setName("the new name is Kevin")}>
				updating the name context
			</Button>
			<Form.Group>
				<Form.Label htmlFor="title">Title: </Form.Label>
				<Form.Control
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="description">Description: </Form.Label>
				<Form.Control
					type="text"
					id="description"
					name="description"
					value={description}
					onChange={handleChange}
				/>
			</Form.Group>
			<Button type="submit">Add a Project</Button>
		</Form>
	);
};

export default AddProject;
