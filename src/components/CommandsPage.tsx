import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandsList';
import {AppPageInterface} from './AppTheme'
import {whiteContainer} from './commonStyles'
export interface Props {
  appPage: AppPageInterface;
}

export interface State {

}


export default class CommandsPage extends React.Component<Props, State>{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Commands");
  }

  render(){

    return <div style={whiteContainer}>
              <CommandHospitalsContainer />
    </div>;
  }
}