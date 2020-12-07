import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route
        exact
        path='/projects'
        component={Projects}
      />
    </div>
  );
}

export default App;
