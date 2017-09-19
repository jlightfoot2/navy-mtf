import * as React from 'react';
import {HotlineInterface} from '../res/data/hotlines'
import {ListItem} from 'material-ui/List';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import ExternalLink from './ExternalLink';

export interface Props {
  hotline: HotlineInterface
}
const HotlineItem: React.SFC<Props> = ({hotline}) => {
  let title: string|JSX.Element = hotline.title;
  if(hotline.image.length){
    title = <div style={{position: 'relative'}}>
                        <img style={{position: 'absolute', top: -12, width: 40, height: 40}} src={hotline.image} />
                        <span style={{position: 'relative',left: 45}}>{hotline.title}</span>
                     </div>;
  }

   return <ExternalLink target="_system" absolutePath={"tel:" + hotline.numberDial}><ListItem 
            rightIcon={<PhoneIcon color={'green'} />}
            primaryText={title}
            secondaryText={hotline.numberDisplay}
          /></ExternalLink>
}

export default HotlineItem;