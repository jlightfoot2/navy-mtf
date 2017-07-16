import * as React from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';



export interface Props {
  searchHospitals(text: string): void;
  searchText: string;
  handleToggleFilter: () => void;
}

export interface State {

}

export default class ListTextSearch extends React.Component<Props, State>{

  render(){
    const {searchHospitals ,searchText/*,handleToggleFilter */} = this.props;
    const clearSearch = (event) => {
        searchHospitals("");
    }
    //<RaisedButton onTouchTap={handleToggleFilter} label={"Done"} />

    return <div>
             <div style={{width: '25%', float: 'left'}}>
              {searchText.length > 0 && <IconButton onTouchTap={clearSearch}><ClearIcon /></IconButton>}
             </div>
             <div style={{width: '75%', float: 'right'}}>
              <TextField
                style={{width: 150}}
                value={searchText}
                hintText={'Search Hospitals'} 
                onChange={(event,newValue) => {
                  searchHospitals(newValue);
                }} 
              />
             </div>
          </div>
  }

}