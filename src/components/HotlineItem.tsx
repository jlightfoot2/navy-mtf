import * as React from 'react';
import {HotlineInterface} from '../res/data/hotlines'
import {ListItem} from 'material-ui/List';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
export interface Props {
  hotline: HotlineInterface
}
const HotlineItem: React.SFC<Props> = ({hotline}) => {

   return <ListItem 
            rightIcon={<PhoneIcon color={'green'} />}
            primaryText={hotline.title}
            secondaryText={hotline.numberDisplay}
          />
}

export default HotlineItem;