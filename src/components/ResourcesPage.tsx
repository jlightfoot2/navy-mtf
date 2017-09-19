import * as React from 'react';
import {AppPageInterface} from './AppTheme'
import {List} from 'material-ui/List';
// import BrowserIcon from 'material-ui/svg-icons/action/open-in-browser';
// import ExternalLink from './ExternalLink';
import ListItemExternal from './ListItemExternal';

const suicideIcon = require('../res/images/ui/link-icons/Navy_Icon_Suicide_Prevention_2.png');

const navyPublicHealth = require('../res/images/ui/link-icons/Navy_Icon_NavyPublicHealth.png');
const medlinePlusIcon = require('../res/images/ui/link-icons/Navy_Icon_Medline.png');
const milOneSourceIcon = require('../res/images/ui/link-icons/Navy_Icon_Military_One_Source.png');
const vetHealthIcon = require('../res/images/ui/link-icons/Navy_Icon_Veteran_Health_Library.png');
const tricareOnlineIcon = require('../res/images/ui/link-icons/Navy_Icon_TriCarePortal_2.png');
const healthFinderIcon = require('../res/images/ui/link-icons/Navy_Icon_HealthFinder.png');


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

// const makeLinkItem = (text,absoluteUrl) => {
//   return <ExternalLink absolutePath={absoluteUrl} ><ListItem primaryText={text} rightIcon={<BrowserIcon />} /></ExternalLink>;
// }


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
               <ListItemExternal text={"Health Finders"} absoluteUrl={"https://healthfinder.gov/HealthTopics/"} imageSrc={healthFinderIcon} />
               <ListItemExternal text={"Medline Plus"} absoluteUrl={"https://medlineplus.gov"} imageSrc={medlinePlusIcon} />
               <ListItemExternal text={"Military OneSource"} absoluteUrl={"http://www.militaryonesource.mil/service/navy"} imageSrc={milOneSourceIcon } />
               <ListItemExternal text={"Veteran's Health Library"} absoluteUrl={"http://www.veteranshealthlibrary.org"} imageSrc={vetHealthIcon} />
               <ListItemExternal text={"Navy and Marine Corps Public Health Center"} absoluteUrl={"http://www.med.navy.mil/sites/nmcphc/Pages/Home.aspx"} imageSrc={navyPublicHealth} />
               <ListItemExternal text={"TRICARE Online"} absoluteUrl={"https://www.tricareonline.com"} imageSrc={tricareOnlineIcon} />
               <ListItemExternal text={"Suicide Prevention"} absoluteUrl={"https://health.mil/suicideprevention"} imageSrc={suicideIcon} />

            </List>
  
    </div>;
  }
}