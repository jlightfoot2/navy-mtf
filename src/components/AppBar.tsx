import * as React from 'react';
import AppBar from 'material-ui/AppBar';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {appBarTitleStyle, appBarIconeStyle} from './commonStyles';
const appIcon = require("../res/images/ui/mtf-icon-48.png")

export interface Props {
  leftIcon: JSX.Element,
  title: string;
  onTitleClick: (event: any) => void;
}

export interface State {
}

const getTitleIcon = (title) => {
  return <div>
           <div style={{position: 'relative',top: 4}} ><img style={{width: 40}}src={appIcon} />
             {title}
           </div>
         </div>;
}

export default class AppTheme extends React.Component<Props, State>{


  render(){
    const {title,leftIcon,onTitleClick} = this.props;
    return <AppBar 
              titleStyle={appBarTitleStyle} 
              iconStyleLeft={appBarIconeStyle}
              title={getTitleIcon(title)} 
              onTitleTouchTap={onTitleClick}
              iconElementLeft={leftIcon} />;
  }
}