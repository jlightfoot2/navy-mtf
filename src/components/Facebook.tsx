import * as React from 'react';
//import LeaderListItem  from './LeaderListItem';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  link: string;
}

export interface State {
  
}

export default class FaceBook extends React.Component<Props, State>{

  render(){
    const {appPage,link} = this.props;
    let {width, height} = appPage.screen;
    const fbsrc = link + `&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`;
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


