import Experiences from "../../components/AboutPageComponents/Experiences/experiences";
import Portfolio from "../../components/AboutPageComponents/Portfolio/portfolio";
import Hobby from "../../components/AboutPageComponents/Hobby/hobby";

const About = () => {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <h1>About Me</h1>
      </div>
      <Experiences />
      <Portfolio />
      <Hobby />
    </div>
  );
};

export default About;

//https://swjeong0825.github.io/tetrisVanillaJS/
