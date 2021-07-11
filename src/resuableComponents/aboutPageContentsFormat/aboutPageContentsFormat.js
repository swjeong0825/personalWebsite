import ExternalLink from "../../resuableComponents/externalLink/externalLink";

/*
  Type:
  props.imagesAndUrlsPairs: [imported image, String(url)] | [[imported image, String(url)]]
*/
const BodyFormat = (props) => {
  // imagesAndUrlsPairs
  const imagesAndUrlsPairsToJsx = () => {
    const imageAndUrlPairs = Array.isArray(props.imageAndUrlPairs[0])
      ? props.imageAndUrlPairs
      : [props.imageAndUrlPairs];
    return imageAndUrlPairs.map((pair) => (
      <ExternalLink href={pair[1]}>
        <img src={pair[0]} alt='HackUConn2018Logo' width='auto' height='200' />
      </ExternalLink>
    ));
  };

  return <div className='row ml-5'>{imagesAndUrlsPairsToJsx()}</div>;
};

/*
  Type:
  props.imageUrlPairsOfTheSubhead: undefined | [imported image, String(url)] | [[imported image, String(url)]]
*/
const SubheadFormat = (props) => {
  // subhead, imageUrlPairsOfTheSubhead;
  return (
    <div>
      <div className='row ml-3'>
        <h5>{props.subhead}</h5>
      </div>
      {props.imageUrlPairsOfTheSubhead ? (
        <BodyFormat imageAndUrlPairs={props.imageUrlPairsOfTheSubhead} />
      ) : (
        {}
      )}
    </div>
  );
};

/*
  types:
  props.head: String | undefined
  props.subheads: [String] | undefined
  props.contentImagesAndUrlPair: Object {key: String(each subhead), value: [imported image, String(url)] | [[imported image, String(url)]]}
*/
const AboutPageContentsFormat = (props) => {
  const subheadsToJsx = () => {
    return props.subheads
      ? props.subheads.map((subhead) => (
          <SubheadFormat
            subhead={subhead}
            imageUrlPairsOfTheSubhead={props.contentImagesAndUrlPairs[subhead]}
          />
        ))
      : {};
  };

  return (
    <article className='mb-5 ml-1'>
      <h3>{props.head}</h3>
      {subheadsToJsx()}
    </article>
  );
};

export default AboutPageContentsFormat;
