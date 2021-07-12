import SunwooPictureOnMainpage from "../../components/SunwooPictureOnMainpage/SunwooPictureOnMainpage";
import IntroductionOnMainpage from "../../components/IntroductionOnMainpage/IntroductionOnMainpage";
const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <SunwooPictureOnMainpage />
        <IntroductionOnMainpage />
      </div>
    </div>
  );
};

export default Home;
