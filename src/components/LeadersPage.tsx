import * as React from 'react';
import LeadershipContainer from '../containers/Leadership';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  match:{url: string}
}

export interface State {
  
}

export default class ServiceLeadershipPage extends React.Component<Props, State>{

  componentWillMount(){
    const {appPage} = this.props;
    appPage.setPageTitle("Leadership");
  }

  render(){

    return <div style={{backgroundColor: 'white'}}>
              <LeadershipContainer />
    </div>;
  }
}