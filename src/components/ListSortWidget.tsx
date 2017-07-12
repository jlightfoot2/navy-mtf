import * as React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import GeoSearchField from '../containers/GeoSearchField';
import {greyContainer,titleStylesLeft2} from './commonStyles'
export interface Props {
  selectedRadio: string;
  onSelect: (event: any, value: any) => void;
}

export interface State {

}

export default class ListTextSearch extends React.Component<Props, State>{

  handleRadioClick = (event: any) => {
    //const {onSelect} = this.props;
  }

  render(){
    const {selectedRadio,onSelect} = this.props;
    const showGeoField = selectedRadio === 'zip_city_location';

    return <div style={greyContainer}>
              <div style={titleStylesLeft2}>Sort By: </div>
                         <RadioButtonGroup  name="sort" onChange={onSelect} valueSelected={selectedRadio}>
                          <RadioButton 
                            label="Your Location"
                            value={"current_location"} 
                          />
                          <RadioButton 
                            label="Zipcode or City"
                            value={"zip_city_location"} 
                          />
                          <RadioButton 
                            label="Alphabetical"
                            value={"default"} 
                          />
                        </RadioButtonGroup>
                        {showGeoField && <GeoSearchField  />}
             </div>;
  }

}
