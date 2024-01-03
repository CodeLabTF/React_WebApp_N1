import { useState} from 'react';

const Home = () => {

//let name = 'mario';


// Here we use useState hook in order to get reactive values which change after click event.

const [name, setName] = useState('mario');
const [age, setAge] = useState(25);

// e is the event object!  
	const handleClick = () => {
		setName('luigi');
		setAge(30);
	}

		
    return (
	<div className="home">
	<h2> Homepage </h2>
	<p> {name} is {age} years old </p> 
	<button onClick={handleClick}>Click Me </button>

	</div>
      );
}
 
export default Home ;
