import React, { useState, useEffect } from "react";
import useSelectMovie from "../../selector/useSelectMovie";
import { options } from "../../data/options";
import CardMovie from "../CardMovie/CardMovie";
import Spinner from "../Spinner/Spinner";
import './MovieContainer.scss'

function MovieContainer({ popularMovie, setPopularMovie, myMovies }) {
	const [select, SelectMovies] = useSelectMovie("Ver:", options);
	const [loading, setIsLoading] = useState(false);

	const getMoviesPopular = () => {
		const urlMoviesPopular = `https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`;

		if (select === 1) {
			const getAPIData = async () => {
				setIsLoading(true);
				const respuesta = await fetch(urlMoviesPopular);
				const { results } = await respuesta?.json();
				const shuffledArray = results
					.sort((a, b) => 0.5 - Math.random())
					.slice(0, 4);
				setPopularMovie(shuffledArray);
			};
			getAPIData();
		} else {
			setPopularMovie(myMovies);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		select &&
			getMoviesPopular();
		// eslint-disable-next-line
	}, [select]);


	return (
		<div className="movies-container">
			{loading ? (
				<Spinner />
			) : (
				<>
					<SelectMovies />
					<div className="movies">
						{select === 1 ? (
							popularMovie?.map((movie) => (
								<CardMovie
									key={movie?.id}
									title={movie.title}
									img={movie.backdrop_path}
									ranking={movie.vote_average}
									year={movie.release_date?.split("-")[0]}
								/>
							))
						) : (
							myMovies?.map((movie) => (
								<CardMovie
									key={movie?.id}
									title={movie.original_title}
									img={movie.backdrop_path}
									myMovie
								/>
							))
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default MovieContainer;
