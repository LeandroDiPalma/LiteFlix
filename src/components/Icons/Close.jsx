import './Close.scss'

const Close = (props) => (
  <svg 
    className="cLose-icon"
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.429 1.429 15.57 15.571M1.429 15.571 15.57 1.429"
      stroke="#fff"
      strokeLinecap="square"
    />
  </svg>
)

export default Close