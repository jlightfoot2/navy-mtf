import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
import {blueContainer} from './commonStyles';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

export interface Props {
  hospitals: CommandInterface[];
  itemClick(hospital: CommandInterface): void;
  show911Warning: boolean;
  dismiss911: () => void;
}

export interface State {

}

let styles911Button = {
  position: 'absolute' as 'absolute',
  top: 4,
  right: 10
}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props,context){
    super(props);
  }

  handleItemClick = (hospital) => {
      const {itemClick} = this.props;
      itemClick(hospital);

  }

  render(){
    const {hospitals,show911Warning,dismiss911} = this.props;
   
    return <div>

              {show911Warning && <br />}
              {show911Warning && <div style={blueContainer}>
                <div>
                If you're experiencing a medical emergency,
                <br />
                please dial 911
                </div>
                <IconButton style={styles911Button} onTouchTap={() => {dismiss911()}}>
                  <CloseIcon color={'white'} />
                </IconButton>
              </div>}

              <List>
                {hospitals.map(hospital => {
                  return <CommandListItem key={hospital.id} itemClick={this.handleItemClick} hospital={hospital} />
                })}
              </List>
              
           </div>;
  }
}