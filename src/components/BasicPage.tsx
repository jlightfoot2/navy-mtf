import * as React from 'react';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export interface Props {
  setPageTitle(title:string): void;
}

export interface State {
}

export default class BasicPage extends React.Component<Props, State>{


  render(){
    const {setPageTitle} = this.props;
    return <div>
       {React.cloneElement((this.props as any).children, { setPageTitle })}
    </div>;
  }
}