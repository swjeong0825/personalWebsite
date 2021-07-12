import ExternalLink from "../externalLink/ExternalLink";

import { FC } from "react";
/*
  Type:
  props.imageAndUrlPairs: [imported image, String(url)] | [[imported image, String(url)]]
*/

interface propsForBodyFormat {
  imageAndUrlPairs:
    | { image: string; url?: string }
    | Array<{ image: string; url?: string }>;
}
const BodyFormat: FC<propsForBodyFormat> = (props) => {
  // imagesAndUrlsPairs
  const imagesAndUrlsPairsToJsx = () => {
    const imageAndUrlPairs = Array.isArray(props.imageAndUrlPairs)
      ? props.imageAndUrlPairs
      : [props.imageAndUrlPairs];
    return imageAndUrlPairs.map((pair) => {
      return (
        <ExternalLink href={pair.url}>
          <img
            src={pair.image}
            alt='About page pictures'
            width='auto'
            height='200'
          />
        </ExternalLink>
      );
    });
  };

  return <div className='ms-5'>{imagesAndUrlsPairsToJsx()}</div>;
};

/*
  Type:
  props.imageUrlPairsOfTheSubhead: undefined | [imported image, String(url)] | [[imported image, String(url)]]
*/
interface propsForSubheadFormat {
  imageUrlPairsOfTheSubhead?:
    | { image: string; url?: string }
    | Array<{ image: string; url?: string }>;
  subhead: string;
}
const SubheadFormat: FC<propsForSubheadFormat> = (props) => {
  // subhead, imageUrlPairsOfTheSubhead;
  return (
    <div>
      <div className='ms-3'>
        <h5>{props.subhead}</h5>
      </div>
      {props.imageUrlPairsOfTheSubhead ? (
        <BodyFormat imageAndUrlPairs={props.imageUrlPairsOfTheSubhead} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

/*
  types:
  props.head: String | undefined
  props.subheads: String | [String] | undefined
  props.contentImagesAndUrlPair: Object {key: String(each subhead), value: [imported image, String(url)] | [[imported image, String(url)]]}
*/
interface propsForAboutPageContentsFormat {
  head?: string;
  subheads?: string | Array<string>;
  contentImagesAndUrlPairs?: {
    [key: string]:
      | { image: string; url?: string }
      | Array<{ image: string; url?: string }>;
  };
}
const AboutPageContentsFormat: FC<propsForAboutPageContentsFormat> = (
  props
) => {
  const subheadsToJsx = () => {
    if (!props.subheads) {
      return;
    }

    const subheads = Array.isArray(props.subheads)
      ? props.subheads
      : [props.subheads];

    return subheads.map((subhead) => (
      <SubheadFormat
        subhead={subhead}
        imageUrlPairsOfTheSubhead={
          props.contentImagesAndUrlPairs &&
          props.contentImagesAndUrlPairs[subhead]
        }
      />
    ));
  };

  return (
    <article className='mb-5 ms-1'>
      <h3>{props.head}</h3>
      {subheadsToJsx()}
    </article>
  );
};

export default AboutPageContentsFormat;
