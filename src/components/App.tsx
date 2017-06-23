import * as React from 'react';
import AppTheme from './AppTheme';
//import ProductsEdit from '../containers/ProductsEdit';
import Home from './Home';
import Dashboard from './Dashboard';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';

export interface AppPageInterface {
  setPageTitle(title: string): void;
}
export interface Props {
  title: string;
}

export interface State {
  title:string;
}
export default class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
  }
  handleTitle = (title: string) => {
    this.setState({
      title: title
    });
  }

  getAppPageObject = ():AppPageInterface => {
    return {
      setPageTitle: this.handleTitle
    }
  }

  renderRouteComponent = (Component) => {
    return () => <Component appPage={this.getAppPageObject()} />;
  }

  render(){
    return <AppTheme title={this.state.title} leftIcon={<LeftMenuIcon />}> 

    <div style={{padding: '10px'}}>
      
    
      <Route path="/shop" render={this.renderRouteComponent(Dashboard)} />
      <Route exact path="/" render={this.renderRouteComponent(Home)} />

    </div>
    </AppTheme>;
 
  }
}
