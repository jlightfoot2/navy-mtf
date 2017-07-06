
import * as React from 'react';
import AppBar from '../containers/AppBar';
import BackButton from './BackButton';
import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import HotlinesPage from './HotlinesPage';
import ResourcesPage from './ResourcesPage';
import TwitterPage from './TwitterPage';
import FacebookPage from './FacebookPage';
import CommandDetailsPage from '../containers/CommandDetailsPage';
import LeadershipPage from './LeadersPage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import HospitalFavoritesListPage from '../containers/HospitalFavoritesListPage';

import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {withRouter} from 'react-router-dom';
import Page from '../Containers/Page';
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
  screen:{width: number, height: number};
  setMainIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  history: any;
}

export interface Props {
  setPageTitle(title:string): void;
  history: any;
}

export interface State {
  screen:{width: number, height: number}
  title: string;
  leftIcon: JSX.Element;
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: <LeftMenuIcon />
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }


  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history
    }
  }

  componentDidMount(){
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

  renderRouteComponent = (Component,extraProps:any = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />,
        appPage: this.getAppPageObject()
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page leftIcon={extraProps.leftIcon} appPage={extraProps.appPage}><Component {...routeProps} {...extraProps} /></Page>;
    }
  }

  render(){
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <AppBar leftIcon={this.state.leftIcon} /> 
              <div>
                
                <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
                <Route exact path="/commands" render={this.renderRouteComponent(CommandsPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/hotlines" render={this.renderRouteComponent(HotlinesPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/resources" render={this.renderRouteComponent(ResourcesPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/twitter" render={this.renderRouteComponent(TwitterPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/facebook" render={this.renderRouteComponent(FacebookPage,{leftIcon: <BackButton path="/" />})} />
                
                <Route exact path="/favorites" render={this.renderRouteComponent(HospitalFavoritesListPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/favorites/:id" render={this.renderRouteComponent(CommandDetailsPage,{leftIcon: <BackButton path="/favorites" />})} />
                
                <Route exact path="/commands/:id" render={this.renderRouteComponent(CommandDetailsPage,{leftIcon: <BackButton path="/commands" />})} />

                <Route exact path="/leadership" render={this.renderRouteComponent(LeadershipPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/leadership/:id" render={this.renderRouteComponent(LeadershipDetailsPage,{leftIcon: <BackButton path="/leadership" />})} />
              </div>
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
