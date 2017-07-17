import * as React from 'react';
import {AppPageInterface} from './AppTheme'
import {List, ListItem} from 'material-ui/List';
import {externalLink} from '../containers/_helper';
import PhoneIcon from 'material-ui/svg-icons/action/open-in-browser';
declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}

export interface Props {
  appPage: AppPageInterface;
}

export interface State {

}

const makeLinkItem = (text,absoluteUrl) => {
  return <ListItem onTouchTap={externalLink(absoluteUrl)} primaryText={text} rightIcon={<PhoneIcon />} />
}


export default class ResourcesPage extends React.Component<Props, State>{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Resources");
  }

  render(){

    return <div style={{backgroundColor: 'white'}}>
            <List>
              {makeLinkItem("Health Finders","https://healthfinder.gov/HealthTopics/")}
              {makeLinkItem("Medline Plus","https://medlineplus.gov")}

              {makeLinkItem("Military OneSource","http://www.militaryonesource.mil/service/navy")}
              {makeLinkItem("Veteran's Health Library","http://www.veteranshealthlibrary.org")}
              {/* TODO get correct links below */}
              {makeLinkItem("Navy and Marine Corps Public Health Center","http://www.med.navy.mil/sites/nmcphc/Pages/Home.aspx")}
              {makeLinkItem("TRICARE","https://www.tricare.mil/")}


            </List>
  
    </div>;
  }
}