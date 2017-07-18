import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import { Link } from 'react-router-dom';
import {externalLink} from '../containers/_helper';

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}



const locationsImage = require("../res/images/ui/trimmed/button-locations.png");
const hotlinesImage = require("../res/images/ui/trimmed/button-dod-hotline-big.png");
const resourcesImage = require("../res/images/ui/trimmed/button-resources.png");
const relayHealthImage = require("../res/images/ui/trimmed/button-relay-health-big.png");
const leaderShipImage = require("../res/images/ui/trimmed/button-leadership.png");

const facebookImage = require("../res/images/ui/mtf-home-facebook-centered.png");
const twitterImage = require("../res/images/ui/mtf-home-twitter-centered.png");
const youTubeImage = require("../res/images/ui/mtf-home-youtube-centered.png");
const favoriteImage = require("../res/images/ui/mtf-home-favorite-centered.png")


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

let footerStyles = {
  margin: '0px auto 0px auto',
  position: 'absolute' as 'absolute',
  bottom: 0
}

let socialImageContainerStyles = {
  float: 'left',
  position: 'relative' as 'relative'
}

let imageLast = {
  position: 'absolute' as 'absolute',
  right: 0
}
export interface Props {
  appPage: AppPageInterface;
  match:{url: string};
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{
  static MAX_WIDTH:number = 640;
  getMainButtonWidth = () => {
    return this.getContentWidth();
  }
  getLimitedContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = Home.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width);
  }

  getContentWidth = () => {
    return  this.getLimitedContentWidth() * 0.90;
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Home");
  }

  render(){
    const {match,appPage} = this.props;
    const contentWidth = this.getContentWidth();
    const limitedWidth = this.getLimitedContentWidth();
    styles = {...styles, width: this.getContentWidth()};
    const halfButtonStyles = {
      width: contentWidth / 2
    }
    const width_dev_4 = contentWidth / 4;
    const socialContainer = {...socialImageContainerStyles,width: width_dev_4};
    const socialImage = {width: width_dev_4 * 0.8};
    imageLast ={...imageLast,width: width_dev_4 * 0.8};
    const imageMiddle = {...socialImage, margin: '0px auto 0px auto'};
    footerStyles = {...footerStyles,width: limitedWidth};
    return <div style={styles}>
                    <div>

                        <img onTouchTap={() => appPage.navigateProgress(match.url + 'commands',5000)} style={{width: this.getMainButtonWidth()}} src={locationsImage} />
          
                    </div>
                    <div style={buttonRowSpacing}>
                      <Link to={match.url + 'hotlines'}>
                        <img style={halfButtonStyles} src={hotlinesImage} />
                      </Link>  
                      <span onTouchTap={externalLink("https://app.mil.relayhealth.com/")}>
                        <img style={halfButtonStyles} src={relayHealthImage} />
                      </span>
                    </div>
                    <div style={buttonRowSpacing}>
                      <Link to={match.url + 'resources'}>
                        <img style={halfButtonStyles} src={resourcesImage} />
                      </Link>
                      <Link to={match.url + 'leadership'}>
                        <img style={halfButtonStyles} src={leaderShipImage} />
                      </Link>
                    </div>
                    <div>
                        <div style={socialContainer}>
                          <div style={socialImage}>
                            <Link to={"/facebook"}>
                              <img style={socialImage} src={facebookImage} />
                            </Link>
                          </div>
                        </div>
                        <div style={socialContainer}>
                          <div style={imageMiddle}>
                            <Link to={"/twitter"}>
                              <img style={imageMiddle}  src={twitterImage} />
                             </Link>
                          </div>
                        </div>
                        <div style={socialContainer}>
                          <div style={imageMiddle}>
                            <img style={imageMiddle} onTouchTap={externalLink('https://www.youtube.com/user/USNavyMedicine')} src={youTubeImage} />
                          </div>
                        </div>
                        <div style={socialContainer}>
                          <div style={imageLast}>
                            <Link to={"/favorites"}>
                              <img style={imageLast} src={favoriteImage} />
                            </Link>
                          </div>
                        </div>
                    </div>

          </div>;
  }
}