import * as React from 'react';
import ExternalLink from './ExternalLink';
import {AppPageInterface} from './AppTheme';
import {List, ListItem} from 'material-ui/List';
import BrowserIcon from 'material-ui/svg-icons/action/open-in-browser';
export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}
const makeLinkItem = (text,absoluteUrl) => {
  return <ExternalLink absolutePath={absoluteUrl} ><ListItem primaryText={text} rightIcon={<BrowserIcon />} /></ExternalLink>;
}
export default class PatientPortalPage extends React.Component<Props, State>{
  componentWillMount(){

  }
  componentDidMount(){

  }

  render(){
    // const {appPage} = this.props;
    return <div style={{backgroundColor: 'white'}}>
      <List>
        {makeLinkItem("TRICARE Online","https://www.tricareonline.com")}
        {makeLinkItem("RelayHealth","https://app.mil.relayhealth.com/")}
      </List>
    </div>;
  }
}