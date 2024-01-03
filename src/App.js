import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
 		<Navbar />
 		<Home />
 		<div className="content">
 			<h1> App Component </h1>
 		</div>
    </div>
  );
}

export default App;
 
