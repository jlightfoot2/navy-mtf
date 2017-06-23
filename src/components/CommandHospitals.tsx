import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandItem from './CommandItem';

export interface Props {
  hospitals: CommandInterface[];
  addFavorite(hospital: CommandInterface): void;
}

export interface State {

}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {hospitals} = this.props;
     console.log(hospitals);
    return <div>
              <h1>Hospitals asdf</h1>

              {hospitals.map(hospital => {
                return <CommandItem key={hospital.id} hospital={hospital} />
              })}

           </div>;
  }
}