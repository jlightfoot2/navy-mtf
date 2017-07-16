import * as React from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';



export interface Props {
  searchHospitals(text: string): void;
  searchText: string;
  handleToggleFilter: () => void;
  isFocus: boolean;
}

export interface State {

}

export default class ListTextSearch extends React.Component<Props, State>{
  public searchInputField; 


  componentDidUpdate(prevProps/*, prevState*/){
    const {isFocus,searchText} = this.props;
    
    if(this.searchInputField){
      if(isFocus){
        this.searchInputField.focus();
      } else if(searchText === prevProps.searchText) {
        this.searchInputField.blur();
      }
    }
  }

  render(){
    const {searchHospitals ,searchText/*,handleToggleFilter */} = this.props;
    const clearSearch = (event) => {
        searchHospitals("");
    }

    return <div>
             <div style={{width: '25%', float: 'left'}}>
              {searchText.length > 0 && <IconButton onTouchTap={clearSearch}><ClearIcon /></IconButton>}
             </div>
             <div style={{width: '75%', float: 'right'}}>
              <TextField
                style={{width: 150}}
                value={searchText}
                hintText={'Search Hospitals'} 
                ref={(input) => { this.searchInputField = input; }} 
                onChange={(event,newValue) => {
                  searchHospitals(newValue);
                }} 
              />
             </div>
          </div>
  }

}