import * as React from 'react';
import AppBar from './AppBar';
//import ProductsEdit from '../containers/ProductsEdit';
import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    
    textColor: '#000000',
    primary1Color: '#000000',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'

  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  setPageTitle(title: string): void;
  screen:{width: number, height: number}
}
export interface Props {
  title: string;
}

export interface State {
  screen:{width: number, height: number}
}
export default class App extends React.Component<Props, State>{
  private title: string;
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions()
    }
    this.title = this.props.title;
  }
  handleTitle = (title: string) => {
    this.title = title;
  }

  getAppPageObject = ():AppPageInterface => {
    return {
      setPageTitle: this.handleTitle,
      screen: this.state.screen
    }
  }

  renderRouteComponent = (Component) => {
    return () => <Component appPage={this.getAppPageObject()} />;
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    return {
       width: window.innerWidth,
       height: window.innerHeight
    }
  }

  hasScreenChanged = () => {
    const {width, height} = this.state.screen;
    const currentDims = this.getScreenDimensions();

    if(width !== currentDims.width){
      return true;
    }
    if(height !== currentDims.height){
      return true;
    }
    return false;
  }

  handlePageResize = () => {
    let resizeTimeoutId = null;
    window.onresize = () => {
       if(resizeTimeoutId){
         clearTimeout(resizeTimeoutId);
       }

       if(this.hasScreenChanged()){

         resizeTimeoutId = setTimeout(
                () => {
                  
                 this.setState({
                   screen: this.getScreenDimensions()
                 }); 
                  
                },
              500);
       }

      
    }
  }

  render(){
    return <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar title={this.title} leftIcon={<LeftMenuIcon />} /> 

      <div style={{padding: '10px'}}>
        
        <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
        <Route path="/commands" render={this.renderRouteComponent(CommandsPage)} />

      </div>
    </div>
    </MuiThemeProvider>;
 
  }
}
