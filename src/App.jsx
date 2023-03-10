import {useState, useEffect} from "react";
import Home from "./pages/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {
	// Bandera pata mostar Modal
	const [modal, setModal] = useState(false);
	const [popularMovie, setPopularMovie] = useState([]);
	const [myMovies, setMyMovies] = useState([]);

	useEffect(() => {
		const getMoviesLS = () => {
			const MoviesLS = JSON.parse(localStorage.getItem("MyMovies")) ?? [];

			setMyMovies(MoviesLS);
		};

		getMoviesLS();
	}, []);

	useEffect(() => {
    console.log(myMovies)
		localStorage.setItem("MyMovies", JSON.stringify(myMovies));
	}, [myMovies]);

	return (
		<>
			<Home
				setModal={setModal}
				popularMovie={popularMovie}
				setPopularMovie={setPopularMovie}
				myMovies={myMovies}
			/>
			{modal ? (
				<Modal
					setModal={setModal}
					myMovies={myMovies}
					setMyMovies={setMyMovies}
				/>
			) : null}
		</>
	);
}

export default App;