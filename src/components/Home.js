const Home = () => {

// e is our even object!  
	const handleClick = (e) => {
		console.log('Hello Ninjas!', e );
	}

	const handleClickAgain = (name, e) =>  {
		console.log('hello' + name, e.target);
	}




    return (
	<div className="home">
	<h2> Homepage </h2>
	<button onClick={handleClick}>Click Me </button>
	<button onClick={(e) => handleClickAgain('mario', e)}>Click Me </button>
	</div>



      );
}
 
export default Home ;
