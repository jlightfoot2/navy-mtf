import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandHospitals';

export interface Props {

}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{

  render(){

    return <div>
      <h2>Welcome</h2>
      <CommandHospitalsContainer />
    </div>;
  }
}