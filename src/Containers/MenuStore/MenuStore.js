import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import axios from 'axios';
import { ToolbarTitle} from 'material-ui/Toolbar';
import Wrapper from '../../hoc/Wrapper/Wrapper';

const urlBase = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store';

class MenuStore extends Component {
    state = {
        storeId: 1,
        stores: []
    };

    handleChange = (event, index, value) => {
        this.setState({storeId: value});
        this.props.selectedStoreChanged(value);
    }

    componentDidMount () {
        this.getData();
    }

    getData = () => {
        console.log('axios: ');
        axios.get (urlBase)
        .then( (resp) => {
            console.log('---------------resp: ', resp);
            this.setState({ stores: resp.data })
        })
        .catch( (error) =>{
        console.log('-----error: ', error);
        });
    }

    render() {
        return (
            <Wrapper>
                <ToolbarTitle text="Store:" />
                <DropDownMenu value={this.state.storeId} onChange={this.handleChange}>
                    {this.state.stores.map((item, index) => (
                        item.cousineId == this.props.cousineId ? 
                        <MenuItem value={item.id}  primaryText={item.name} key={item.id} />
                        : null
                    ))}
            </DropDownMenu>
          </Wrapper>
        );
    }
}

export default MenuStore;