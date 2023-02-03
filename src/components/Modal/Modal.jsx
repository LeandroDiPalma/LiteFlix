import { useState } from "react";
import HeaderModal from "./components/HeaderModal";
import FormModal from "./components/FormModal";
import ProgressModal from "./components/ProgressModal";
import Close from "../Icons/Close";
import SuccessfulModal from "./components/SuccessfulModal";
import "./Modal.scss";

function Modal({ setModal, myMovies, setMyMovies }) {
	const [progress, setProgress] = useState(0);
	const [isProgress, setIsProgress] = useState(false);
	const [isForm, setIsForm] = useState(true);
	const [ready, setReady] = useState(false);
	const [isDisabled, setIsdisabled] = useState(true);
	const [isCancel, setIsCancel] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	const handleModal = () => {
		setModal(false);
	};

	return (
		<div className="modal-container">
			<HeaderModal />
			<Close onClick={handleModal} />
			{!isSuccessful ? (
				<>
					<p className="title-modal">agregar película</p>
					<ProgressModal
						isCancel={isCancel}
						progress={progress}
						isProgress={isProgress}
						ready={ready}
						setIsCancel={setIsCancel}
						setReady={setReady}
						setIsForm={setIsForm}
					/>
					<FormModal
						setModal={setModal}
						myMovies={myMovies}
						setMyMovies={setMyMovies}
						setProgress={setProgress}
						setIsProgress={setIsProgress}
						isForm={isForm}
						setIsForm={setIsForm}
						isDisabled={isDisabled}
						setIsdisabled={setIsdisabled}
						setReady={setReady}
						setIsCancel={setIsCancel}
						setIsSuccessful={setIsSuccessful}
					/>
				</>
			) : (
				<>
					<SuccessfulModal setModal={setModal} />
				</>
			)}
		</div>
	);
}

export default Modal;
