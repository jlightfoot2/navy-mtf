import * as React from 'react';

import TextField from 'material-ui/TextField';
//import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/FlatButton';



export interface Props {
  searchHospitals(text: string): void;
  searchText: string;
  handleToggleFilter: () => void;
}

export interface State {

}

export default class ListTextSearch extends React.Component<Props, State>{

  render(){
    const {searchHospitals ,searchText,handleToggleFilter} = this.props;
    const clearSearch = (event) => {
        searchHospitals("");
    }
    return <div>
              <TextField
                            style={{width: 150}}
                            value={searchText}
                            hintText={'Search'} 
                            onChange={(event,newValue) => {
                              searchHospitals(newValue);
                            }} 
                          />

              <RaisedButton onTouchTap={handleToggleFilter} label={"Done"} />
              {searchText.length !== 0 && <RaisedButton onTouchTap={clearSearch} label={"Clear"} />}
          </div>
  }

}