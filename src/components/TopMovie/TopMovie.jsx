import PlayTwo from "../Icons/PlayTwo";
import PlusTwo from "../Icons/PlusTwo";
import "./TopMovie.scss"

function TopMovie({ titleMovie }) {
	return (
		<div className="top-movie-container">
			<p className="sub-title">Original de <strong>LITEFLIX</strong></p>
			<div className="title-container">
				<h1 className="top-movie-title">{titleMovie}</h1>
			</div>
			<div className="container-buttons">
				<button className="button-play">
					<PlayTwo />
					REPRODUCIR
				</button>
				<button className="button-list">
					<PlusTwo />
					MI LISTA
				</button>
			</div>
		</div>
	);
}

export default TopMovie;
