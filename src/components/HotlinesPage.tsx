import * as React from 'react';
import HotlineItem from './HotlineItem';
export interface Props {

}

export interface State {
 
}

export default class HotlinesPage extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    return <div>
              <h1>Hotlines</h1>
              <HotlineItem hotline={{title:'test hotline',number: '434 1234'}} />

           </div>;
  }
}