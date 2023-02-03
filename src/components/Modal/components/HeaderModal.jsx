import React from "react";
import Logo from "../../Logo/Logo";
import avatar from "../../../assets/img/perfil.png";
import './HeaderModal.scss'

const HeaderModal = () => {
	return (
		<>
			<header className="header-modal">
				<nav className="navbar-modal">
					<Logo />
					<img src={avatar} alt="avatar" />
				</nav>
			</header>
		</>
	);
};

export default HeaderModal;
