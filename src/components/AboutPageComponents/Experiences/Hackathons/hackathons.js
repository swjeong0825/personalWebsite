import HackUConn2018Logo from "../../../../assets/image/HackUConn2018Logo.png";
import HackUMass2020Logo from "../../../../assets/image/HackUMass2020Logo.png";
import QHacks2021Logo from "../../../../assets/image/QHacks2021Logo.png";

const Hackathons = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hackathons;
