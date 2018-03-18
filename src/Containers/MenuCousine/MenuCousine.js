import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import axios from 'axios';
import {ToolbarTitle} from 'material-ui/Toolbar';
import Wrapper from '../../hoc/Wrapper/Wrapper';

const urlBase = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine';

class MenuCousine extends Component {
    state = {
        cousineId: 1,
        cousines: []
      };

    handleChange = (event, index, value) => {
        this.setState({cousineId: value});
        this.props.selectedCousineChanged(value);
    }

    componentDidMount () {
        this.getData();
    }

    getData = () => {
        axios.get (urlBase)
        .then( (resp) => {
            console.log('---------------resp: ', resp);
            this.setState({ cousines: resp.data })
        })
            .catch( (error) =>{
            console.log('-----error: ', error);
        });
    }

    render() {

        return (
            <Wrapper>
                <ToolbarTitle text="Cousine:" />
                <DropDownMenu value={this.state.cousineId} onChange={this.handleChange}>
                    {this.state.cousines.map((item, index) => (
                        <MenuItem value={item.id}  primaryText={item.name} key={item.id} />
                    ))}
            </DropDownMenu>
          </Wrapper>
        );
    }
}

export default MenuCousine;
