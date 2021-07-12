import sunwoo_picture from "../../assets/image/SunwooJeong.jpg";

const SunwooPictureOnMainpage = () => {
  return (
    <div className='col-sm'>
      <img
        src={sunwoo_picture}
        alt='sunwoo_picture'
        width='100%'
        height='auto'
      />
    </div>
  );
};

export default SunwooPictureOnMainpage;
