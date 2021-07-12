import { Link } from "react-router-dom";

const AboutButton = () => {
  return (
    <Link to='/about'>
      <button
        type='button'
        className='btn btn-primary'
        style={{ marginRight: "10px" }}>
        About Me
      </button>
    </Link>
  );
};

export default AboutButton;
