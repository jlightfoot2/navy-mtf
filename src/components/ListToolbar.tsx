import * as React from 'react';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentSort from 'material-ui/svg-icons/content/sort';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const getSearchThingies = (searchHospitals,searchText) => {
  return <div>
              <TextField
                            style={{width: 150}}
                            value={searchText}
                            hintText={'Search'} 
                            onChange={(event,newValue) => {
                              searchHospitals(newValue);
                            }} 
                          />

              <RaisedButton label={"Done"} />
              <RaisedButton label={"Clear"} />
          </div>;
}
export interface Props {
  showTextField?: boolean;
  searchHospitals(text: string): void;
  searchText: string;
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
    console.log(value);
    this.setState({
      selectedRadio: value,
      showTextField: value === 'zip_city_location'
    });
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
    const {showTextField,showSort,showFilter} = this.state;
    const {searchHospitals,searchText} = this.props;
    return       <div>
                    <Toolbar>
                      <ToolbarGroup firstChild={true}>
                        {showFilter && <div>
                                    {getSearchThingies(searchHospitals,searchText)}
                         </div>}
                      </ToolbarGroup>

                      <ToolbarGroup>
                         <IconButton onTouchTap={this.handleToggleFilter}>
                           <ActionSearch />
                         </IconButton>
                         <IconButton onTouchTap={this.handleToggleSort}>
                           <ContentSort />
                         </IconButton>
                      </ToolbarGroup>
                    </Toolbar>



                    {showSort && 
                      <div>
                         <RadioButtonGroup name="sort" onChange={this.handleRadioSelect} valueSelected={this.state.selectedRadio}>
                          <RadioButton 
                            label="Your Location"
                            value={"current_location"} 
                            style={{ display: 'inline-block', width: '160px' }}
                          />
                          <RadioButton 
                            label="Zipcode"
                            value={"zip_city_location"} 
                            style={{ display: 'inline-block', width: '100px' }}
                          />
                        </RadioButtonGroup>
                        {showTextField && <TextField
                         
                          hintText="Zipcode or City"
                        />}
                      </div>
                    }


                 </div>
  }

}