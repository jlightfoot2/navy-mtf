import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
export interface Props {
  searchData:{id: number,description: string, title:string,latitude:number, longitude:number}[];
  setUserLocation: (latitude:number, longitude:number) => void;
  searchGeo: (searchStr: string) => void;
  sortText: string;
}

export interface State {

}

export default class GoeSearchFields extends React.Component<Props, State>{


  handleSelect = (chosenRequest: any, index: number) => {
    const {setUserLocation} = this.props;
    setUserLocation(chosenRequest.latitude,chosenRequest.longitude);
  }

  handleUpdateInput = (searchText: string) => {
    const {searchGeo} = this.props;
    searchGeo(searchText);
  }

  render(){
    const {searchData,sortText} = this.props;
    return <AutoComplete 
        searchText={sortText}
        id="geo_search_auto"
        dataSource={searchData}
        dataSourceConfig={{text: 'description', value: 'id'}}
        onNewRequest={this.handleSelect}
        onUpdateInput={this.handleUpdateInput}
        hintText="City or Zip"
        filter={(searchText, key) => {
          return true;
        }}
    />
  }
}