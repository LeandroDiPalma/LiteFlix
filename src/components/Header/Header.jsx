import addMovie from "../../assets/img/agregar-película.png";
import photo from "../../assets/img/perfil.png";
import Logo from "../Logo/Logo";
import Alert from "../Icons/Alert";
import Menu from "../Icons/Menu";
import Plus from "../Icons/Plus";
import './Header.scss'


const Header = ({ setModal }) => {
	const handleModal = () => {
		setModal(true);
	};

	return (
		<header className="container-header">
			<div className="container-add-movie">
				<img className="add-movie-img" src={addMovie} alt="agregar pelicula" onClick={handleModal} />
				<div className="separator">
					<button className="add-more-content" onClick={handleModal}>
						<Plus />
						agregar película
					</button>
				</div>
					<div>
						<Logo />
					</div>
			</div>
			<div className="container-menu">
				<Menu />
				<Alert />
				<img className="avatar" width={36} height={36} src={photo} alt="foto perfil" />
			</div>
		</header>
	);
};

export default Header;
