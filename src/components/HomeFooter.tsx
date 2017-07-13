import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import {externalLink} from '../containers/_helper';
const footerImage = require("../res/images/ui/mtf-home-footer.png");
let styles = {
  margin: '0px auto 0px auto',
  paddingTop: 10,
  clear: 'both'
};

export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}

export default class HomeFooter extends React.Component<Props, State>{
  static maxWidth:number = 640;

  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth =  HomeFooter.maxWidth;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width);
  }
  render(){
    const contentWidth = this.getContentWidth();
    styles = {...styles, width: contentWidth};

    //image height === 121
    return <div>
      <div style={styles}>
      
            <img style={{width: '100%'}} onTouchTap={externalLink('http://www.med.navy.mil')} src={footerImage} />
      </div>
    </div>;
  }
}