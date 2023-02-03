import React from "react";
import './ProgressModal.scss'

const ProgressModal = ({
	isCancel,
	progress,
	isProgress,
	ready,
	setIsCancel,
	setReady,
	setIsForm
}) => {

	const handleCancel = () => {
		setIsCancel(true)
		setReady(false)
		setIsCancel(false)
	}

	const handleRetry = () => {
		setIsCancel(false)
		setReady(false)
		setIsCancel(false)
		setIsForm(true)
	}

	return (
		<>
			{isCancel && (
				<div className="progress-wrapper">
					<p>¡ERROR! no se pudo cargar la película</p>
					<div className="container-progress">
						<div className="progress-error" />
					</div>
					<div className="container-button">
						<span className="retry" onClick={handleRetry}>Reintentar</span>
					</div>
				</div>
			)}
			{isProgress && (
				<div className="progress-wrapper">
					<p>Cargando {progress}% ...</p>
					<div className="container-progress">
						<div className="progress-bar" />
					</div>
					<div className="container-button">
						<button className="cancel-button" onClick={handleCancel}>Cancelar</button>
					</div>
				</div>
			)}
			{ready && (
				<div className="progress-wrapper">
					<p>{progress}% Cargado</p>
					<div className="container-progress">
						<div className="progress-succesfull" />
					</div>
					<div className="container-button">
						<span className="successful">¡listo!</span>
					</div>
				</div>
			)}
		</>
	);
};

export default ProgressModal;
