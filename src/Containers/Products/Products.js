import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import axios from 'axios';
import DataTables from 'material-ui-datatables';
import {deepOrange500} from 'material-ui/styles/colors';

const urlBase = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Product';

const TABLE_COLUMNS = [
    {
      key: 'id',
      label: 'ID',
      sortable: false,
      style: {
        width: 20,
      }
    }, {
      key: 'name',
      label: 'NAME',
      sortable: true,
      style: {
        width: 350,
      }
    }, {
        key: 'description',
        label: 'DESCRIPTION',
        sortable: true,
      }, {
        key: 'price',
        label: 'PRICE',
        sortable: true,
        alignRight: false,
        style: {
            width: 40,
          }
      }
  ];

const styles = {
    container: {
      textAlign: 'center',
    },
    component: {
      margin: '30px 20px',
    },
    titleStyle: {
      fontSize: 16,
      color: deepOrange500,
    },
    footerToolbarStyle: {
      padding: '0 100px',
    },
    tableStyle: {
      tableLayout: 'auto',
    },
    tableBodyStyle: {
      overflowX: 'auto',
    },
    tableWrapperStyle: {
      padding: 5,
    },
  };

  const muiTheme = getMuiTheme({
    palette: {
      accent1Color: deepOrange500,
    },
  });

class Products extends Component {
    state = {
        products: [],
        productId: 1
    }

    componentDidUpdate(prevProps, prevState) {

      console.log('prevstate: ', prevState);
      
      if (prevProps.storeId !== this.props.storeId) {
        console.log('>>>this.stpropste.storeId: ', this.props.storeId);
        
        this.getData();
      }
    }

    componentDidMount () {
        this.getData();
    }

    getData = () => {
        const filteredProd = [];
        axios.get (urlBase)
        .then( (resp) => {
            resp.data.map((item) => {
                // console.log("====>storeId: ", this.props.storeId)
                // console.log(this.props.storeId,'===', item.storeId );
                
                if (item.storeId == this.props.storeId) {
                    
                    filteredProd.push(item);
                }
            }
            )
            console.log('---------------PROD resp: ', resp, filteredProd);
            this.setState({ products: filteredProd })
        })
            .catch( (error) =>{
            console.log('-----error: ', error);
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div style={styles.container}>
                {/* <h1>Material-UI-Custom-Components</h1> */}
                <div style={styles.component}>
                    <h2>Products</h2>
                    <Card style={{margin: 12}}>
                    <DataTables
                height={'auto'}
                selectable={true}
                showRowHover={true}
                columns={TABLE_COLUMNS}
                data={this.state.products}
                multiSelectable={true}
                onNextPageClick={this.handleNextPageClick}
                onPreviousPageClick={this.handlePreviousPageClick}
                onRowSelection={this.handleRowSelection}
                showCheckboxes={true}
                enableSelectAll={true}
                showHeaderToolbar={false}
                count={11}
              />
                    {/* <DataTables
                        title={''}
                        height={'auto'}
                        selectable={true}
                        showRowHover={true}
                        columns={TABLE_COLUMNS}
                        data={this.state.products}
                        showCheckboxes={true}
                        showHeaderToolbar={false}
                        multiSelectable={true}
                        showFooterToolbar={false}
                        onCellClick={this.handleCellClick}
                        onCellDoubleClick={this.handleCellDoubleClick}
                        onFilterValueChange={(value) => this.handleFilterValueChange(value)}
                        onSortOrderChange={this.handleSortOrderChange}
                        count={this.props.totalResults} */}
                    />
                    </Card>
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Products;