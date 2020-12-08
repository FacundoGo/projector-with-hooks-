import React from "react";
import { Form, Button } from "react-bootstrap";

const EditProject = ({ handleSubmit, handleChange, title, description }) => {
	return (
		<div>
			<h2>Edit project</h2>
			<Form onSubmit={handleSubmit}>
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
				<Button type="submit">Update Project</Button>
			</Form>
		</div>
	);
};
export default EditProject;
