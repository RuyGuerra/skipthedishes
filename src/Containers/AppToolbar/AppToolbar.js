import React, { Component } from 'react';
import MenuCousine from '../MenuCousine/MenuCousine';
import MenuStore from '../MenuStore/MenuStore';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

export default class AppToolbar extends Component {
    state = {
        cousineId: 0
    }

    onChangeCousine = (id) => {
        console.log('CousineID: ',id);
        this.setState({ cousineId: id });
    }

    onChangeStore = (id) => {
        console.log('+++++StoreID: ',id);
        // this.setState({ storeId: id });
        this.props.storeChanged(id)
    }

    // componentDidUpdate(prevProps, prevState) {

    //     console.log('prevstate: ', prevState);
        
    //     if (prevState.url !== this.state.url) {
    //       this.getData();
    //     }
    //   }

    render() {
        return (
            <Toolbar>
            <ToolbarGroup firstChild={true}>
                <MenuCousine selectedCousineChanged={(id) => this.onChangeCousine(id)}/>
                <MenuStore cousineId={this.state.cousineId} selectedStoreChanged={(id) => this.onChangeStore(id)} />
            </ToolbarGroup>
            <ToolbarGroup>
              <FontIcon className="muidocs-icon-custom-sort" />
              <ToolbarSeparator />
              <RaisedButton label="Order" primary={true} />
              {/* <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
              </IconMenu> */}
            </ToolbarGroup>
          </Toolbar>
        )
    }
}
