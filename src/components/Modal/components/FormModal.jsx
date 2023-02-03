import { useState } from "react";
import { useDropzone } from "react-dropzone";
import clip from "../../../assets/img/clip.png";
import './FormModal.scss'

const FormModal = ({
	setModal,
	myMovies,
	setMyMovies,
	setProgress,
	setIsProgress,
	isForm,
	setIsForm,
	isDisabled,
	setIsdisabled,
	setReady,
	setIsCancel,
	setIsSuccessful,
}) => {
	const [formValues, setFormValues] = useState({
		original_title: "",
		backdrop_path: "",
	});

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptFiles) => {
			const file = acceptFiles[0];
			send_image(file);
		},
	});

	const handleModal = () => {
		setModal(false);
	};

	const send_image = (files) => {
		const fileReader = new FileReader();

		fileReader.onerror = () => {
			setIsCancel(true);
		};

		fileReader.onloadstart = (data) => {
			if (fileReader.readyState === 1) {
				let progress = parseInt(data.loaded);
				setProgress(progress);
			}
		};

		fileReader.onprogress = (data) => {
			if (fileReader.readyState === 1) {
				setIsForm(false);
				setIsProgress(true);
				let progress = parseInt((data.loaded / data.total) * 50, 10);
				setProgress(progress);
			}
		};

		fileReader.onloadend = (data) => {
			if (fileReader.readyState === 2) {
				setIsProgress(false);
				setReady(true);
				setIsdisabled(false);
				let progress = parseInt((data.loaded / data.total) * 100, 10);
				setProgress(progress);
				setFormValues({ ...formValues, backdrop_path: fileReader.result });
			}
		};

		fileReader.readAsDataURL(files);
	};

	const generateID = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { original_title, backdrop_path } = formValues;

		if (original_title === "" || backdrop_path === "") {
			return;
		} else {
			const myMoviesID = {
				original_title: formValues.original_title,
				backdrop_path: formValues.backdrop_path,
			};
			myMoviesID.id = generateID();
			console.log(myMoviesID)
			console.log(myMovies)
			setMyMovies([...myMovies, myMoviesID]);
			setIsForm(false);

			setIsSuccessful(true);
		}
	};

	return (
		<form>
			{isForm && (
				<div className="container-input" {...getRootProps()}>
					<input
						className="input-file"
						type="file"
						id="movie"
						accept="image/png,image/jpeg"
						onChange={(e) => {
							send_image(e.target.files[0]);
						}}
						{...getInputProps()}
					/>
					<div className="container-clip-mobile">
						<img className="img-clip" src={clip} alt="clip" />
						Agregá un archivo
					</div>
					<div className="container-clip-desktop">
						<img className="img-clip" src={clip} alt="clip" />
						<span>Agregá un archivo</span> o arrastralo y soltalo aquí
					</div>
				</div>
			)}
			<input
				className="input-text"
				value={formValues.original_title}
				placeholder="TÍTULO"
				type="text"
				onChange={(e) =>
					setFormValues({ ...formValues, original_title: e.target.value })
				}
			/>
			<button className="button-upload" type="submit" onClick={handleSubmit} disabled={isDisabled}>
				subir película
			</button>
			<button className="button-exit" type="button" onClick={handleModal}>
				salir
			</button>
		</form>
	);
};

export default FormModal;
