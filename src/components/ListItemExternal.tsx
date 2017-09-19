import * as React from 'react';
import ExternalLink from './ExternalLink';
import {ListItem} from 'material-ui/List';
import BrowserIcon from 'material-ui/svg-icons/action/open-in-browser';
interface Props{
  text: string,
  absoluteUrl: string;
  imageSrc: string;
}

const ListItemExternal: React.SFC<Props> = ({text,absoluteUrl,imageSrc}) => {
  const imageTitle = <div style={{position: 'relative'}}>
                        <img style={{position: 'absolute', top: -12, width: 40, height: 40}} src={imageSrc} />
                        <span style={{position: 'relative',left: 50}}>{text}</span>
                     </div>;
  return <ExternalLink absolutePath={absoluteUrl} ><ListItem primaryText={imageTitle} rightIcon={<BrowserIcon />} /></ExternalLink>;
};

export default ListItemExternal;