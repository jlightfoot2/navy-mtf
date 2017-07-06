import * as React from 'react';
import Facebook from './Facebook';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}

export default class FaceBookPage extends React.Component<Props, State>{
  componentWillMount(){
    this.props.appPage.setPageTitle("Facebook");
  }
  render(){
    const {appPage} = this.props;
    return <Facebook appPage={appPage} link={'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUSNavyMedicine%2F'} />;
  }
}


