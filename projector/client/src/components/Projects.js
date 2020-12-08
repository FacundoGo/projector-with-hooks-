import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";

const Projects = (props) => {
	const [projects, setProjects] = useState([]);
	// const greeting = useContext(DataContext);
	// state = {
	//   projects: []
	// }

	// console.log("this is the context", greeting);

	const getData = () => {
		// get the current list of projects from the server
		axios
			.get("/api/projects")
			.then((response) => {
				console.log(response);

				setProjects(response.data);
				// this.setState({
				//   projects: response.data
				// })
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, []);

	// componentDidMount() {
	//   this.getData();
	// }

	return (
		<div className="projects-container">
			<AddProject getData={getData} />
			<ProjectList projects={projects} />
		</div>
	);
};
export default Projects;
