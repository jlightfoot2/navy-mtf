import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandsList';
import {AppPageInterface} from './AppTheme'
import {whiteContainer} from './commonStyles'
import ListToolBar from '../containers/ListToolbar';
import {blueContainer} from './commonStyles'
export interface Props {
  appPage: AppPageInterface;
  searchText?: string;
}

export interface State {
  searchText: string;
}


export default class CommandsPage extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    searchText: ""
  }
  constructor(props){
    super(props);
    this.state = {
      searchText: props.searchText
    }
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Commands");
  }

  handleSearchHospitals = (text: string) => {
    this.setState({
      searchText: text
    });
  }

  render(){
    return <div style={whiteContainer}>
              <ListToolBar />
              <div style={blueContainer}>
                If you're experiencing a medical emergency,
                <br />
                please dial 911
              </div>
              <CommandHospitalsContainer />
    </div>;
  }
}