import "./Plus.scss"

const Plus = (props) => (
	<svg
		className="plus-icon"
		width={14}
		height={14}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M7 0v14M14 7H0" stroke="#fff" />
	</svg>
);

export default Plus;
