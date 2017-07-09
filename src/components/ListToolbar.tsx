import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import * as React from 'react';

export interface Props {

}

export interface State {

}

export default class ListToolbar extends React.Component<Props, State>{


  render(){

    return       <Toolbar>
                      <ToolbarGroup firstChild={true}>
                        <ToolbarTitle text="Sort" />
                      </ToolbarGroup>

                      <ToolbarGroup firstChild={true}>
                         <ToolbarSeparator />
                         <ToolbarTitle text="Search" />
                         <ToolbarTitle text="Search 2" />
                         <ToolbarTitle text="Search  3" />
                         
                      </ToolbarGroup>
                 </Toolbar>
  }

}