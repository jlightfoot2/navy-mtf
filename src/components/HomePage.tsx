import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import {blueBackgroundPage} from './commonStyles'

const locationsImage = require("../res/images/ui/trimmed/button-locations.png");
const hotlinesImage = require("../res/images/ui/trimmed/button-dod-hotline-big.png");
const resourcesImage = require("../res/images/ui/trimmed/button-resources.png");
const relayHealthImage = require("../res/images/ui/trimmed/button-relay-health-big.png");
const leaderShipImage = require("../res/images/ui/trimmed/button-leadership.png");

const buttonRowSpacing = {
  margin: '40px auto 40px auto',
  padding: '40px auto 40px auto'
}

export interface Props {
  appPage: AppPageInterface
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{

  componentDidMount(){
    this.props.appPage.setPageTitle("Home");
  }

  render(){

    return <div style={blueBackgroundPage}>
            <div style={buttonRowSpacing}>
              <img src={locationsImage} />
            </div>
            <div style={buttonRowSpacing}>
              <img src={hotlinesImage} />
              <img src={relayHealthImage} />
            </div>
            <div style={buttonRowSpacing}>
              <img src={resourcesImage} />
              <img src={leaderShipImage} />
            </div>
    </div>;
  }
}