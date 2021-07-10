import Hackathons from "./Hackathons/hackathons";
import Internships from "./Internships/internships";
const Experiences = () => {
  return (
    <article className='mb-5'>
      <h3>Experiences</h3>
      <Internships />
      <Hackathons />
    </article>
  );
};

export default Experiences;
