import UMassAmherstCicsLogo from "../../assets/image/UMassAmherstCICS.png";
import ACEALogo from "../../assets/image/ACEA-Logo-Web.png";
import HackUConn2018Logo from "../../assets/image/HackUConn2018Logo.png";
import HackUMass2020Logo from "../../assets/image/HackUMass2020Logo.png";
import QHacks2021Logo from "../../assets/image/QHacks2021Logo.png";

import AboutPageContentsFormat from "../../reusableComponents/aboutPageContentsFormat/aboutPageContentsFormat";

// props.contentImagesAndUrlPair: Object {key: String(each subhead), value: [[imported image, String(url)]]}

const About = () => {
  return (
    <div>
      <AboutPageContentsFormat
        head='Education'
        subheads={"Undergraduate"}
        contentImagesAndUrlPairs={{
          Undergraduate: {
            image: UMassAmherstCicsLogo,
            url: "https://www.cics.umass.edu/",
          },
        }}
      />
      <AboutPageContentsFormat
        head='Experiences'
        subheads={["Internships", "Hackathons"]}
        contentImagesAndUrlPairs={{
          Internships: { image: ACEALogo, url: "https://aceaglobal.com/" },
          Hackathons: [
            { image: HackUConn2018Logo},
            { image: HackUMass2020Logo, url: "https://hackumass.com/" },
            { image: QHacks2021Logo, url: "https://qhacks.io/ " },
          ],
        }}
      />
    </div>
  );
};

export default About;

//https://swjeong0825.github.io/tetrisVanillaJS/
