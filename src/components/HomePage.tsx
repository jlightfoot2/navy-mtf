import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import { Link } from 'react-router-dom';
const locationsImage = require("../res/images/ui/trimmed/button-locations.png");
const hotlinesImage = require("../res/images/ui/trimmed/button-dod-hotline-big.png");
const resourcesImage = require("../res/images/ui/trimmed/button-resources.png");
const relayHealthImage = require("../res/images/ui/trimmed/button-relay-health-big.png");
const leaderShipImage = require("../res/images/ui/trimmed/button-leadership.png");

const buttonRowSpacing = {
  margin: '20px auto 20px auto'
 // padding: '40px auto 40px auto'
}
let styles = {
  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto',
  width: 500,
  paddingTop: 25
}
export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  match:{url: string};
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{
  static maxWidth:number = 640;
  getMainButtonWidth = () => {
    return this.getContentWidth();
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = Home.maxWidth;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.90;
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Home");
  }

  render(){
    const {match} = this.props;
 
    styles = {...styles, width: this.getContentWidth()};
    const halfButtonStyles = {
      width: this.getContentWidth() / 2
    }

    return <div style={styles}>
              <div>
                <Link to={match.url + 'commands'}>
                  <img style={{width: this.getMainButtonWidth()}} src={locationsImage} />
                </Link>
              </div>
              <div style={buttonRowSpacing}>
                <Link to={match.url + '/resources'}>
                  <img style={halfButtonStyles} src={hotlinesImage} />
                </Link>  
                <Link to={match.url + '/resources'}>
                  <img style={halfButtonStyles} src={relayHealthImage} />
                </Link>
              </div>
              <div style={buttonRowSpacing}>
                <Link to={match.url + '/resources'}>
                  <img style={halfButtonStyles} src={resourcesImage} />
                </Link>
                <Link to={match.url + 'leadership'}>
                  <img style={halfButtonStyles} src={leaderShipImage} />
                </Link>
              </div>
    </div>;
  }
}