import * as React from 'react';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentSort from 'material-ui/svg-icons/content/sort';
import ListTextSearch from './ListTextSearch';
import ListSortWidget from './ListSortWidget';

export interface Props {
  showTextField?: boolean;
  searchHospitals(text: string): void;
  searchText: string;
  sortHospitals(text: string,direction:string): void;
  sortConfig: {sortBy: string, sortDir: string};
  locationPermission: boolean;
}

export interface State {
  showTextField: boolean;
  selectedRadio: string;
  showSort: boolean;
  showFilter: boolean;
}

export default class ListToolbar extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
    showTextField: false,
    searchText: ''
  }

  constructor(props){
    super(props);
    this.state = {
      showTextField: props.showTextField,
      selectedRadio: 'current_location',
      showSort: false,
      showFilter: false
    }
  }
  handleRadioSelect = (event: any, value: any) => {
    const {sortHospitals,sortConfig} = this.props
    let direction = 'asc'
    if(value === sortConfig.sortBy){ //if last sort equals current then toggle direction
      direction = sortConfig.sortDir === 'asc' ? 'desc' : 'asc';
    }
    sortHospitals(value,direction);
  }

  handleToggleSort = () => {
    const {showSort} = this.state;
    this.setState({
      showSort: !showSort,
      showFilter: false
    });
  }

  handleToggleFilter = () => {
    const {showFilter} = this.state;
    this.setState({
      showFilter: !showFilter,
      showSort: false
    });
  }


  render(){
    const {showSort,showFilter} = this.state;
    const {searchHospitals,searchText,sortConfig,locationPermission} = this.props;
    const {sortBy} = sortConfig;
    return       <div>
                    <Toolbar>
                      <ToolbarGroup firstChild={true}>
                        {showFilter && <ListTextSearch 
                                            handleToggleFilter={this.handleToggleFilter} 
                                            searchHospitals={searchHospitals} 
                                            searchText={searchText} 
                                            />}

                         {!(showFilter || showSort) && <IconButton onTouchTap={this.handleToggleFilter}>
                           <ActionSearch />
                         </IconButton>}
                         {!showFilter && <IconButton onTouchTap={this.handleToggleSort}>
                           <ContentSort />
                         </IconButton>}
                      </ToolbarGroup>
                    </Toolbar>


                    {showSort && <ListSortWidget locationPermission={locationPermission} onSelect={this.handleRadioSelect} selectedRadio={sortBy} />}


                 </div>
  }

}