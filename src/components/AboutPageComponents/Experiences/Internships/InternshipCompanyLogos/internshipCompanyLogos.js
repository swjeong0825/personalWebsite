import ACEALogo from "../../../../../assets/image/ACEA-Logo-Web.png";
import ExternalLink from "../../../../../resuableComponents/externalLink/externalLink";
const InternshipCompanyLogos = () => {
  return (
    <div className='row ml-5'>
      <ExternalLink href='https://aceaglobal.com/'>
        <img src={ACEALogo} alt='HackUConn2018Logo' width='auto' height='200' />
      </ExternalLink>
    </div>
  );
};

export default InternshipCompanyLogos;
