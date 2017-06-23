import * as React from 'react';
import AppBar from 'material-ui/AppBar';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#000000',
    primary1Color: '#1b4583',
   // primary2Color: cyan700,
   // primary3Color: grey400,
  },
  appBar: {
    height: 50,
  },
});

export interface Props {
  leftIcon: JSX.Element,
  title: string;
}

export interface State {
}

export default class AppTheme extends React.Component<Props, State>{


  render(){
    const {leftIcon} = this.props;
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <AppBar title={this.props.title} iconElementLeft={leftIcon} />
              {this.props.children}
            </div>
    </MuiThemeProvider>;

  }
}