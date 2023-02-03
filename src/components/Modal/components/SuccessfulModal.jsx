import React from "react";
import './SuccessfulModal.scss'

const SuccessfulModal = ({setModal}) => {
	const handleHome = () => {
		setModal(false);
	};

	return (
		<div className="successful-modal-container">
			<p className="logo">
				LITE<span>FLIX</span>
			</p>
			<h2 className="successful-heading">¡Felicitaciones!</h2>
			<div className="container-message">
				<p className="successful-message">Liteflix The Movie fue correctamente subida.</p>
			</div>
			<button className="button-home" onClick={handleHome}>ir a home</button>
		</div>
	);
};

export default SuccessfulModal;
