import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandsList';
import {AppPageInterface} from './AppTheme'
export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class CommandsPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Commands");
  }

  render(){

    return <div style={{backgroundColor: 'white'}}>
              <CommandHospitalsContainer />
    </div>;
  }
}