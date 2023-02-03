import {useState} from "react";
import "./selectMovie.scss"

const useSelectMovie = (label, options) => {
	const [state, setState] = useState(1);

	const SelectMovies = () => (
		<div className="select-container">
			<label className="select-label" htmlFor="select-movie">{label}</label>
			<select
				className="select-movie"
				value={state}
				onChange={(e) => setState(Number(e.target.value))}
				name=""
				id="select-movie"
			>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.nombre}
					</option>
				))}
			</select>
		</div>
	);

	return [state, SelectMovies];
};

export default useSelectMovie;
