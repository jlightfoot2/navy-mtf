import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import {List} from 'material-ui/List';
import ListItemExternal from './ListItemExternal';

const  TricareOnlineImage = require('../res/images/ui/link-icons/Navy_Icon_TriCarePortal_2.png');
const  RelayHealthImage = require('../res/images/ui/link-icons/Navy_Icon_RelayHealth.png');


export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
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
        <ListItemExternal text="TRICARE Online" absoluteUrl={"https://www.tricareonline.com"} imageSrc={TricareOnlineImage} />
        <ListItemExternal text="RelayHealth" absoluteUrl={"https://app.mil.relayhealth.com/"} imageSrc={RelayHealthImage} />
      </List>
    </div>;
  }
}