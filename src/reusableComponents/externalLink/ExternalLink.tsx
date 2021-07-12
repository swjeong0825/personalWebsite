import { FC } from "react";

interface PropsForExternalLink {
  href?: string;
}

const ExternalLink: FC<PropsForExternalLink> = (props) => {
  return (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  );
};

export default ExternalLink;
