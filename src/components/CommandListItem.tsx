import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import Avatar from 'material-ui/Avatar';
const placeHolderImg = require('../res/images/commands/placeholder.jpg');
//import {listItemImage} from './commonStyles';
import {ListItem} from 'material-ui/List';

export interface Props {
  hospital: CommandInterface;
  itemClick(hospital: CommandInterface);
}

export interface State {

}

export default class CommandItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  handleItemClick = (event) => {
    const {itemClick,hospital} = this.props;
    itemClick(hospital);
  }
  render(){
    const {hospital} = this.props;
    const hasDistance = hospital.distance > 0;
    let distanceString = '';
    if(hasDistance){
      distanceString = (hospital.distance > 2000 ? '2000+ ' : hospital.distance) + ' miles'; 
    }

    return <ListItem 
            onTouchTap={this.handleItemClick} 
            leftAvatar={<Avatar src={hospital.icon || hospital.img || placeHolderImg} />}  
            primaryText={hospital.title} 
            secondaryText={distanceString}
            />
  }
}

