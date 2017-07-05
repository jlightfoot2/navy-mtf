import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import {AppPageInterface} from './AppTheme';
import BackButton from './BackButton';
import {List, ListItem} from 'material-ui/List';
import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
import PhoneCallIcon from 'material-ui/svg-icons/communication/call';
import FavoriteCheckbox from './FavoriteCheckBox';
import {titleStyles1,contentContainer1,PrimaryColor,greyContainer,whiteContainer} from './commonStyles';


export interface Props {
  hospital: CommandInterface;
  appPage: AppPageInterface;
  isFavorite: boolean;
  toggleFavorite: (hospital: CommandInterface,isFavorite:boolean) => void;
}

export interface State {

}

export default class CommandDetails extends React.Component<Props, State>{
  static MAX_WIDTH:number = 640;

  componentWillMount(){
    const {appPage} = this.props;
    this.props.appPage.setPageTitle("Command Details");
    appPage.setMainIcon(<BackButton path={'/commands'} />);
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = CommandDetails.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.90;
  }

  handleSetToggle = () => {
    const {toggleFavorite,isFavorite,hospital} = this.props;
    return () => {
      toggleFavorite(hospital,isFavorite);
    }
  }

  render(){
    const {hospital,isFavorite} = this.props;
    const styles = {...contentContainer1,width: this.getContentWidth()};
    const titleStyles = {...titleStyles1,width: this.getContentWidth()};
    return <div style={whiteContainer}>
              <div style={styles}>
                <div style={{width: '90%',margin: '0px auto 0px auto'}}>
                  <img style={{width: '100%'}} src={hospital.img} />
                </div>
              </div>
              <div style={{greyContainer}}>
                <div style={titleStyles as any}>{hospital.title}</div>
                <FavoriteCheckbox toggleFavorite={this.handleSetToggle()} checked={isFavorite} />
                <List>
                  <ListItem leftIcon={<NavigationIcon color={PrimaryColor} />} primaryText={hospital.address} />
                  <ListItem leftIcon={<PhoneCallIcon color={PrimaryColor} />} primaryText={hospital.phone} />
                </List>
             
              </div>
    </div>
  }
}

