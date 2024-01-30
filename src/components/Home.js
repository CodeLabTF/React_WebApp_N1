
import { useState, useEffect} from 'react';
import "./Home.css"
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: '1. My new website', body: 'Rand txt', author: 'dave', id: 1},
		{ title: '2. Welcome Party', body: 'Rand txt', author: 'kalev', id: 2},
		{ title: '3. Top tips', body: 'Rand txt', author: 'marika', id: 3},

]);


const [name, setName] = useState('dave');

	useEffect( () => {
	console.log('useEffect ran')

	console.log(name)
	}, 
	[name ]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}
	

//  Data is stored in useState!

// In the map function "blog" is a random arguemnt is used to asign array values!

// blogs is a prop!
	return (
		<div className="home">

		<BlogList blogs= {blogs} title="A Blog" handleDelete={handleDelete}/>		
		<button onClick={() => setName('karen') } > change name </button>
		<p> {name} </p>

	
		</div>   
			)

     
}
 
export default Home ;
