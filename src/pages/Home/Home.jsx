import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import TopMovie from "../../components/TopMovie/TopMovie";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import Spinner from "../../components/Spinner/Spinner";
import './Home.scss'

function Home({setModal, popularMovie, setPopularMovie, myMovies}) {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [load, setLoad] = useState(false);


	const getAPINowPlaying = async () => {
		const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
		try {
			const response = await fetch(urlNowPlaying);
			const {results} = await response.json();
			const shuffledArray = results
				.sort((a, b) => 0.5 - Math.random())
				.slice(0, 1);
			setNowPlaying(shuffledArray[0]);
		} catch (error) {
			return error;
		}
	};

	// Traer Datos de la API
	const urlImageMovie = `https://image.tmdb.org/t/p/original/${nowPlaying?.poster_path}`;
	const titleMovie = nowPlaying?.original_title;

	useEffect(() => {
		setLoad(true);
		getAPINowPlaying();
		setLoad(false);
	}, []);

	const sectionStyleMovie = nowPlaying?.poster_path
		? {
				backgroundImage: `linear-gradient( to bottom, rgb(11 11 11 / 60%), rgb(13 13 13 / 1%) ), url(${urlImageMovie})`,
		  }
		: {
				background: `#000`,
		  };

	return (
		<>
			{load ? (
				<Spinner />
			) : (
				<div className="home-container" style={sectionStyleMovie}>
					<Header setModal={setModal} />
					<div className="main-wrapper">
						<TopMovie titleMovie={titleMovie} />
						<MovieContainer
							popularMovie={popularMovie}
							setPopularMovie={setPopularMovie}
							myMovies={myMovies}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;
