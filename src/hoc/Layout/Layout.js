import React, { Component } from 'react'
import Wrapper from '../Wrapper/Wrapper';
import AppToolbar from '../../Containers/AppToolbar/AppToolbar';
import Products from '../../Containers/Products/Products';

class Layout extends Component {
    state = {
        storeId: 1
    }
    onStoreChange = (id) => {
        this.setState({storeId: id})
        console.log('+++++------StoreID: ',id);
    }
    render() {
        return (
            <Wrapper>
                <AppToolbar storeChanged={(id) => this.onStoreChange(id)}/>
                <main>
                    <Products storeId={this.state.storeId}/>
                    {/* {this.props.children} */}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;