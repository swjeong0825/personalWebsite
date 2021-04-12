import HackUConn2018Logo from "../../assets/image/HackUConn2018Logo.png";
import HackUMass2020Logo from "../../assets/image/HackUMass2020Logo.png";
import QHacks2021Logo from "../../assets/image/QHacks2021Logo.png";

const About = () => {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <h1>About Me</h1>
      </div>
      <article className='mb-5'>
        <div className='row ml-1'>
          <h3>Experiences</h3>
        </div>
        <div className='row ml-3'>
          <h5>Hackathons</h5>
        </div>
        <div className='row ml-5'>
          <img
            src={HackUConn2018Logo}
            alt='HackUConn2018Logo'
            width='auto'
            height='200'
          />
          <img
            src={HackUMass2020Logo}
            alt='HackUConn2018Logo'
            width='auto'
            height='200'
          />
          <img
            src={QHacks2021Logo}
            alt='HackUConn2018Logo'
            width='auto'
            height='200'
          />
        </div>
      </article>
      <article>
        <div className='row ml-1'>
          <h3>Portfolio</h3>
        </div>
      </article>
      <article>
        <div className='row ml-1'>
          <h3>Hobby</h3>
        </div>
      </article>
    </div>
  );
};

export default About;

//https://swjeong0825.github.io/tetrisVanillaJS/
