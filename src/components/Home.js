
import { useState} from 'react';
import "./Home.css"
const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: '1. My new website', body: 'Rand txt', author: 'dave', id: 1},
		{ title: '2. Welcome Party', body: 'Rand txt', author: '', id: 2},
		{ title: '3. Top tips', body: 'Rand txt', author: 'marika', id: 3},
		
	]);

//  Data is stored in useState!

// In the map function "blog" is a random arguemnt is used to asign array values!
	return (
		<div className="home">

		{blogs.map((blog) => (
			<div className="blog-preview" key={blog.id}>
				<h2> {blog.title} </h2>
				<p> Written by {blog.author} </p>
			 </div>	
		)) }

		</div> 
	)

     
}
 
export default Home ;
