
import * as React from 'react';
import Twitter from './Twitter';
import {AppPageInterface} from './AppTheme';

export interface Props {
  appPage: AppPageInterface;
  link: string;
}

export interface State {

}

export default class TwitterPage extends React.Component<Props, State>{


  componentWillMount(){
    this.props.appPage.setPageTitle("Twitter");
  }

  render(){

    return <Twitter appPage={this.props.appPage} link={"https://twitter.com/NavyMedicine"} />;
  }
}


