import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
import {AppPageInterface} from './AppTheme';
import {whiteContainer} from './commonStyles';
export interface Props {
  hospitals:CommandInterface[];
  removeFavorite(hospital: CommandInterface): void;
  itemClick(hospital: CommandInterface): void;
  appPage: AppPageInterface;
}

export interface State {
 
}

export default class ProductsCatalog extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Favorites");
  }

  handleItemClick = (hospital) => {
      const {itemClick} = this.props;
      itemClick(hospital);

  }
  render(){
    const {hospitals} = this.props;
    return <div style={whiteContainer}>
              <List>
                {hospitals.map(hospital => {
                  return <CommandListItem key={hospital.id} itemClick={this.handleItemClick} hospital={hospital} />
                })}
              </List>

           </div>;
  }
}