import * as React from 'react';
//import ProductView from '../components/ProductView';
import {CommandInterface} from '../res/data/commands';
export interface Props {
  hospitals:CommandInterface[];
  remove(hospital: CommandInterface): void;
}

export interface State {
 
}

export default class ProductsCatalog extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {hospitals,remove} = this.props;
    return <div>
              <h1>Favorites</h1>

              {hospitals.map(hospital => {
                return  <div onClick={() => remove(hospital)}>{hospital.title}</div>;
              })}

           </div>;
  }
}