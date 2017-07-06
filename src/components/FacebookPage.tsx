import * as React from 'react';
//import LeaderListItem  from './LeaderListItem';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  link: string;
}

export interface State {
  
}

export default class FaceBookPage extends React.Component<Props, State>{
  componentWillMount(){
    //const {leftIcon} = this.props;
    this.props.appPage.setPageTitle("Facebook");
 
    //this.props.appPage.setMainIcon(leftIcon);
  }
  render(){
    const {appPage} = this.props;
    let {width, height} = appPage.screen;
    const fbsrc = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUSNavyMedicine%2F&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`;
    const maxWidth = 500; //max width fb allows for this plugin
    width = width > maxWidth ? maxWidth : width;
    const styles = {
      width,
      margin: '0px auto 0px auto'
    }
    return <div style={styles}>
              <iframe src={fbsrc} width={width} height={height} style={{border:'none',overflow:'hidden'}} scrolling="no"  allowTransparency={true}></iframe>
          </div>;
  }
}


