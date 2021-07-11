import UMassAmherstCicsLogo from "../../assets/image/UMassAmherstCICS.png";
import ACEALogo from "../../assets/image/ACEA-Logo-Web.png";
import HackUConn2018Logo from "../../assets/image/HackUConn2018Logo.png";
import HackUMass2020Logo from "../../assets/image/HackUMass2020Logo.png";
import QHacks2021Logo from "../../assets/image/QHacks2021Logo.png";

import AboutPageContentsFormat from "../../resuableComponents/aboutPageContentsFormat/aboutPageContentsFormat";

// props.contentImagesAndUrlPair: Object {key: String(each subhead), value: [[imported image, String(url)]]}

const About = () => {
  return (
    <div>
      <AboutPageContentsFormat
        head='Education'
        subheads={["Undergraduate"]}
        contentImagesAndUrlPairs={{
          Undergraduate: [UMassAmherstCicsLogo, "https://www.cics.umass.edu/"],
        }}
      />
      <AboutPageContentsFormat
        head='Experiences'
        subheads={["Internships", "Hackathons"]}
        contentImagesAndUrlPairs={{
          Internships: [ACEALogo, "https://aceaglobal.com/"],
          Hackathons: [
            [HackUConn2018Logo, undefined],
            [HackUMass2020Logo, "https://hackumass.com/"],
            [QHacks2021Logo, "https://qhacks.io/"],
          ],
        }}
      />
    </div>
  );
};

export default About;

//https://swjeong0825.github.io/tetrisVanillaJS/
