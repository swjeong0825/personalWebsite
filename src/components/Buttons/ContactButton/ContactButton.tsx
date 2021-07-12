import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link to='/Contact'>
      <button type='button' className='btn btn-info'>
        Contact Me
      </button>
    </Link>
  );
};

export default ContactButton;
