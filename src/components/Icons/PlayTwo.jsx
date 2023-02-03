import "./PlayTwo.scss";

const PlayTwo = (props) => (
	<svg
		className="play-icon"
		width={11}
		height={16}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			clipRule="evenodd"
			d="M9.942 8.236.625 1.875v12.25l9.317-5.889Z"
			stroke="#fff"
		/>
	</svg>
);

export default PlayTwo;
