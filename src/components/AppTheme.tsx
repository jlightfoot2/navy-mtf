
import * as React from 'react';
import AppBar from '../containers/AppBar';
import BackButton from './BackButton';
import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import HotlinesPage from './HotlinesPage';
import ResourcesPage from './ResourcesPage';
import TwitterPage from './TwitterPage';
import FacebookPage from './FacebookPage';
import HomePageHeader from './HomePageHeader';
import CommandDetailsPage from '../containers/CommandDetailsPage';
import LeadershipPage from './LeadersPage';
//import HomeFooter from './HomeFooter';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import HospitalFavoritesListPage from '../containers/HospitalFavoritesListPage';
import HospitalTwitterPage from '../containers/HospitalTwitterPage';
import EulaDialog from '../containers/Eula';

import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {withRouter} from 'react-router-dom';
import Page from '../Containers/Page';
import SnackbarGlobal from '../containers/SnackbarGlobal';
import LinearProgress from 'material-ui/LinearProgress';
//import {homeFooterDefault, homeFooterAbsolute} from './commonStyles';

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
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  setTitlePath(titlePath:string):void;
  history: any;
  showProgress: (to_ms?: number) => void;
  hideProgress: () => void;
  navigateProgress: (path: string,to_ms?: number) => void;
  progressVisible: boolean;
}

export interface Props {
  setPageTitle(title:string): void;
  history: any;
}

export interface State {
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
  showProgressIndicator: boolean;
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: <LeftMenuIcon />,
      titlePath: '/',
      showProgressIndicator: false
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }

  handleSetTitlePath = (titlePath: string) => {
    this.setState({titlePath})
  }

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    const {titlePath} = this.state;
    history.push(titlePath);
  }

  handleNavigationProgress = (path,to_ms = 2000) => {
    this.handleShowProgress(to_ms);
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;

    history.push(path);
    
  }

  handleShowProgress = (to_ms = 2000) => {
    this.setState({
      showProgressIndicator: true,
    });
    const progTo = setTimeout(
      () => {
        clearTimeout(progTo );
        this.handleHideProgress();
      },to_ms);
  }

  handleHideProgress = () => {
    this.setState({
      showProgressIndicator: false,
    })
  }


  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history,
      setTitlePath: this.handleSetTitlePath,
      showProgress: this.handleShowProgress,
      hideProgress: this.handleHideProgress,
      navigateProgress: this.handleNavigationProgress,
      progressVisible: this.state.showProgressIndicator
    }
  }

  componentDidMount(){
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    const orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
 
    return {
       width: window.innerWidth,
       height: window.innerHeight,
       orientation
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
        appPage: this.getAppPageObject(),
        titlePath: "/"
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page titlePath={extraProps.titlePath} leftIcon={extraProps.leftIcon} appPage={extraProps.appPage}><Component {...routeProps} {...extraProps} /></Page>;
    }
  }

  shouldDisplayFooter = () => {
    const {screen} = this.state;
    const widthCompare = screen.width > 640 ? 640 : screen.width;
    const hwRatio = screen.height/widthCompare;
    if(hwRatio < 1.7){
      return false;
    }
    return true;
  }

  shouldFooterAbsolute = () => {
    const {screen} = this.state;
    if(screen.width >= 640){
      return false;
    }
    return true;
  }

  render(){
    const {screen,showProgressIndicator} = this.state;
    const {history} = this.props;
   // const showFooter = this.shouldDisplayFooter();
   // const footerAbsolute = this.shouldFooterAbsolute();
    //const footerStyles = footerAbsolute ? homeFooterAbsolute : homeFooterDefault;
    const mainStyles = {position: 'relative' as 'relative', height: screen.height}
    
    const isHomePage = history.location.pathname === '/';

    return <MuiThemeProvider muiTheme={muiTheme}>
            <div style={mainStyles}>
                {!isHomePage && <AppBar  leftIcon={this.state.leftIcon} onTitleClick={this.handleTitleClick} />} 
                <Route exact path="/" render={(routeProps) => <HomePageHeader appPage={this.getAppPageObject()} />} />
                {showProgressIndicator && <LinearProgress color={"rgb(0, 188, 212)"} mode="indeterminate" />}
                <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
                <Route exact path="/commands" render={this.renderRouteComponent(CommandsPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/hotlines" render={this.renderRouteComponent(HotlinesPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/resources" render={this.renderRouteComponent(ResourcesPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/twitter" render={this.renderRouteComponent(TwitterPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/facebook" render={this.renderRouteComponent(FacebookPage,{leftIcon: <BackButton path="/" />})} />
                
                <Route exact path="/favorites" render={this.renderRouteComponent(HospitalFavoritesListPage,{leftIcon: <BackButton path="/" />})} />
                <Route exact path="/favorites/:id" render={this.renderRouteComponent(CommandDetailsPage,{titlePath: "/favorites", leftIcon: <BackButton path="/favorites" />})} />
                
                <Route exact path="/commands/:id" render={this.renderRouteComponent(CommandDetailsPage,{titlePath: "/commands", leftIcon: <BackButton path="/commands" />})} />

                <Route exact path="/commands/:id/twitter" render={this.renderRouteComponent(HospitalTwitterPage)} />

                <Route exact path="/leadership" render={this.renderRouteComponent(LeadershipPage,{titlePath: "/", leftIcon: <BackButton path="/" />})} />
                <Route exact path="/leadership/:id" render={this.renderRouteComponent(LeadershipDetailsPage,{titlePath: "/leadership",leftIcon: <BackButton path="/leadership" />})} />

                <SnackbarGlobal />
                <EulaDialog />
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
