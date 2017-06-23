import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandHospitals';
import {AppPageInterface} from './App'
export interface Props {
  appPage: AppPageInterface
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{

  componentDidMount(){
    this.props.appPage.setPageTitle("Home");
  }
  render(){

    return <div>
      <h2>Welcome</h2>
      <CommandHospitalsContainer />
    </div>;
  }
}