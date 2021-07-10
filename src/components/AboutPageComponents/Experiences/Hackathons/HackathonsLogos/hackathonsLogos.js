import HackUConn2018Logo from "../../../../../assets/image/HackUConn2018Logo.png";
import HackUMass2020Logo from "../../../../../assets/image/HackUMass2020Logo.png";
import QHacks2021Logo from "../../../../../assets/image/QHacks2021Logo.png";
import ExternalLink from "../../../../../resuableComponents/externalLink/externalLink";

const HackathonsLogos = () => {
  return (
    <div className='row ml-5'>
      <img
        src={HackUConn2018Logo}
        alt='HackUConn2018Logo'
        width='auto'
        height='200'
      />
      <ExternalLink href='https://hackumass.com/'>
        <img
          src={HackUMass2020Logo}
          alt='HackUConn2018Logo'
          width='auto'
          height='200'
        />
      </ExternalLink>
      <ExternalLink href='https://qhacks.io/'>
        <img
          src={QHacks2021Logo}
          alt='HackUConn2018Logo'
          width='auto'
          height='200'
        />
      </ExternalLink>
    </div>
  );
};

export default HackathonsLogos;
