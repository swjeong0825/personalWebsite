import "./IntroductionOnMainpage.css";
import AboutButton from "../Buttons/AboutButton/AboutButton";
import ContactButton from "../Buttons/ContactButton/ContactButton";

const IntroductionOnMainpage = () => {
  return (
    <div className='col-sm' id='homepageBackground'>
      <div className='d-flex justify-content-md-center align-items-center h-100'>
        <div>
          <p>Hi there! I am</p>
          <h1
            className='font-weight-bold display-4'
            style={{ color: "#222e44" }}>
            Sunwoo Jeong
          </h1>
          <h4>{"Undergraduate Student at UMass Amherst"}</h4>
          <h5>
            Looking for{" "}
            <span style={{ color: "#B22222" }}>Software Developer</span>{" "}
            Internship!
          </h5>

          <AboutButton />
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default IntroductionOnMainpage;
