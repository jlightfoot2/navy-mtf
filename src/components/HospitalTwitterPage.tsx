
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




  componentDidMount(){
    const {appPage,hospital} = this.props;
    appPage.setPageTitle("Twitter");
    const backPath = "/commands/" + hospital.id;
    appPage.setTitlePath(backPath);
    appPage.setMainIcon(<BackButton path={backPath} />);
  }

  render(){
    const {hospital,appPage} = this.props;
    return <Twitter appPage={appPage} link={hospital.twitter} />;
  }
}


