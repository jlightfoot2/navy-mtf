import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import Avatar from 'material-ui/Avatar';
//import {listItemImage} from './commonStyles';
import {ListItem} from 'material-ui/List';

export interface Props {
  hospital: CommandInterface;
}

export interface State {

}

export default class CommandItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {hospital} = this.props;

    return <ListItem leftAvatar={<Avatar src={hospital.icon} />} primaryText={hospital.title} />
  }
}

