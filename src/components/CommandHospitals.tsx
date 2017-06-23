import * as React from 'react';

import {CommandInterface} from '../res/data/commands';

export interface Props {
  hospitals: CommandInterface[];
  addFavorite(hospital: CommandInterface): void;
}

export interface State {
  mode: number; //0: view, 1: edit
}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props){
    super(props);
    this.state = {
      mode: 0
    }
  }
  
  render(){
    const {hospitals} = this.props;

    return <div>
              <h1>Hospitals</h1>

              {hospitals.map(hospital => {
                <div key={hospital.id}>{hospital.title}</div>
              })}

           </div>;
  }
}