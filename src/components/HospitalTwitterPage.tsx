
import * as React from 'react';
import Twitter from './Twitter';
import {AppPageInterface} from './AppTheme';
import {CommandInterface} from '../res/data/commands';
import BackButton from './BackButton';
export interface Props {
  appPage: AppPageInterface;
  hospital: CommandInterface;
  match: {url: string};
}

export interface State {

}

export default class HospitalTwitterPage extends React.Component<Props, State>{



  componentWillMount(){
    const {appPage,hospital} = this.props;
    appPage.setPageTitle("Twitter");
    appPage.setMainIcon(<BackButton path={"/commands/" + hospital.id} />);
  }

  render(){
    const {hospital,appPage} = this.props;
    return <Twitter appPage={appPage} link={hospital.twitter} />;
  }
}


