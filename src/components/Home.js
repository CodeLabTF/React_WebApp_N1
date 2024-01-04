
import { useState} from 'react';
import "./Home.css"
const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: '1. My new website', body: 'Rand txt', author: 'mario', id: 1},
		{ title: '2. Welcome Party', body: 'Rand txt', author: 'yoshi', id: 2},
		{ title: '3. Top tips', body: 'Rand txt', author: 'josie', id: 3},
		
	]);

//  Data is stored in useState!

	return (
		<div className="home">

		//In the map function blog is a randomly arguemnt that we can choose and
		//it is used to asign array values!
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
