import "./Menu.scss"

const Menu = (props) => (
	<svg 
		className="menu-icon"
		width={27}
		height={14}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M0 1h27M0 7h27M10 13h17" stroke="#fff" />
	</svg>
);

export default Menu;
