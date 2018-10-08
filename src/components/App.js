import React from 'react';

import data from '../data';
import Products from './Products';
import Table from './Table';


class App extends React.Component {
    state={
        hover: false,
        products: [],
        selectedItem: [],
    }

    componentDidMount() {
        this.setState({
            products: data
        })
    }

    addItem = (itemIndex) => {
        this.setState({
            selectedItem: [...this.state.selectedItem, itemIndex ]
    })
    }
    onHover = () => {
        this.setState({
            hover: true
    })
    }
    outHover = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        return(
            <div>
            <div className="content-container">
                <Products products={this.state.products} clicked={this.state.clicked} addItem={this.addItem} hover={this.state.hover} onHover={this.onHover} outHover={this.outHover} itemClicked={this.itemClicked} />
            </div>
                <Table selectedItem={this.state.selectedItem} products={this.state.products} />
            </div>
        )
    }
}
export default App;