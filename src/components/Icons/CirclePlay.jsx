import './CirclePlay.scss'
const CirclePlay = (props) => (
    <svg clasName='circle-play-icon' width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="20" cy="20" r="19.5" fill="#242424" fill-opacity="0.5" stroke="white" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z" stroke="white" />
    </svg>
);

export default CirclePlay;
