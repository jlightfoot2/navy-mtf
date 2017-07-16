import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentSort from 'material-ui/svg-icons/content/sort';
import ListTextSearch from './ListTextSearch';
import ListSortWidget from './ListSortWidget';
import {greyContainer,toolBarContentLeft,toolBarContentRight} from './commonStyles'

export interface Props {
  showTextField?: boolean;
  searchHospitals(text: string): void;
  searchText: string;
  sortHospitals(text: string,direction:string): void;
  sortConfig: {sortBy: string, sortDir: string};
  locationPermission: boolean;
  screen: {width: number, height: number, orientation: string}
}

export interface State {
  showTextField: boolean;
  selectedRadio: string;
  showSort: boolean;
  focusTextSearch: boolean;
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
      focusTextSearch: false
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
    });
  }

  handleToggleFilter = () => {
    const {focusTextSearch} = this.state;
    this.setState({
      showSort: false,
      focusTextSearch: !focusTextSearch
    });
  }

  handleSearchTextElement = (element) => {

  }


  render(){
    const {showSort,focusTextSearch} = this.state;
    const {searchHospitals,searchText,sortConfig,locationPermission,screen} = this.props;
    console.log(screen);
    const {sortBy} = sortConfig;
    const iconsWidth = 100;
    return       <div>
                    <div style={{...greyContainer,height: 50, padding: 0, position: 'relative'}}>
                        <div style={{...toolBarContentLeft,right: iconsWidth, width: 200}}>
                          <ListTextSearch
                                  isFocus={focusTextSearch}
                                  handleToggleFilter={this.handleToggleFilter} 
                                  searchHospitals={searchHospitals} 
                                  searchText={searchText} 
                                  />
                         </div>
                         <div style={{...toolBarContentRight, width: iconsWidth}}>
                           <IconButton onTouchTap={this.handleToggleFilter}>
                             <ActionSearch />
                           </IconButton>
                           <IconButton onTouchTap={this.handleToggleSort}>
                             <ContentSort />
                           </IconButton>
                         </div>
                    </div>


                    {showSort && <ListSortWidget locationPermission={locationPermission} onSelect={this.handleRadioSelect} selectedRadio={sortBy} />}


                 </div>
  }

}