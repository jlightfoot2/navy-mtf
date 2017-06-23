import * as React from 'react';
import {CommandInterface} from '../res/data/commands';

export interface Props {
  hospital: CommandInterface;
}

export interface State {

}

export default class CommandItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {hospital} = this.props;
    return <div>
              <h1>{hospital.title}</h1>

              <img src={hospital.img} />

           </div>;
  }
}

