import { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";

function App() {
	const [name, setName] = useState("initial name is Jeff");

	return (
		<div className="App">
			<Navbar />
			<DataContext.Provider value={{ name, setName }}>
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/projects/:id" component={ProjectDetails} />
			</DataContext.Provider>
		</div>
	);
}

export default App;
