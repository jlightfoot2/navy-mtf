import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
import {blueContainer} from './commonStyles';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CommandsPagination from './CommandsPagination';

export interface Props {
  hospitals: CommandInterface[];
  show911Warning: boolean;
  dismiss911: () => void;
  addFavorite(hospital: CommandInterface): void;
  itemClick(hospital: CommandInterface): void;
  history:{push: any}
  setPage: (pageIdx: number) => void;
  page: number;
  lastPage: number;
  searchText: string;
}

export interface State {

}

let styles911Button = {
  position: 'absolute' as 'absolute',
  top: 4,
  right: 10
}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props,context){
    super(props);
  }

  handleItemClick = (hospital) => {
      const {itemClick} = this.props;
      itemClick(hospital);

  }

  handle911Dismiss = (event) => {
    const {dismiss911} = this.props;
    event.preventDefault();
    event.stopPropagation();
    dismiss911();
  }

  render(){
    const {hospitals,show911Warning,page,lastPage,setPage,searchText} = this.props;
    if(!hospitals.length){
      let noResultsText = "No Results";
      if(searchText.length > 0){
        noResultsText += ` for "${searchText}"`
      }
      return <h3>{noResultsText}</h3>;
    }
    return <div>

              {show911Warning && <br />}
              {show911Warning && <div style={blueContainer}>

                <div>
                  If you're experiencing a medical<br /> 
                  emergency please dial 911
                </div>

                <IconButton style={styles911Button} onTouchTap={this.handle911Dismiss}>
                  <CloseIcon color={'white'} />
                </IconButton>

              </div>}

              <List>
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
                {hospitals.map(hospital => {
                  return <CommandListItem key={hospital.id} itemClick={this.handleItemClick} hospital={hospital} />
                })}
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
              </List>
              
           </div>;
  }
}