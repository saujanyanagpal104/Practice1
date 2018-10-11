import React from 'react';

import data from '../data';
import Products from './Products';
import Table from './Table';


class App extends React.Component {
    state={
        hover: "",
        products: [],
        selectedItem: [],
        clicked: false
    }

    componentDidMount = () => {
        this.setState({
            products: data
        })
    }
    onHover = (target) => {
        this.setState({
            hover: target
    })
    }
    outHover = () => {
        this.setState({
            hover: ""
        })
    }
    itemSelected = (value) => {
        this.setState({
            selectedItem: [...this.state.selectedItem, value ]
    })
    }
    itemClicked = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        return(
            <div>
            <div className="content-container">
                <Products products={this.state.products} selectedItem={this.state.selectedItem} itemSelected={this.itemSelected} hover={this.state.hover} clicked={this.state.clicked} onHover={this.onHover} outHover={this.outHover} itemClicked={this.itemClicked} />
            </div>
                <Table selectedItem={this.state.selectedItem} products={this.state.products} />
            </div>
        )
    }
}
export default App;