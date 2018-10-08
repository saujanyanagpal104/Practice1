import React from 'react';

import data from '../data';
import Products from './Products';
import Table from './Table';


class App extends React.Component {
    state={
        hover: false,
        products: [],
        clicked: []
    }

    componentDidMount = () => {
        this.setState({
            products: data
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
    itemClicked = (value) => {
        this.setState({
            clicked: [...this.state.clicked, value ]
    })
    }

    render() {
        return(
            <div>
            <div className="content-container">
                <Products products={this.state.products} clicked={this.state.clicked} hover={this.state.hover} onHover={this.onHover} outHover={this.outHover} itemClicked={this.itemClicked} />
            </div>
                <Table clicked={this.state.clicked} products={this.state.products} />
            </div>
        )
    }
}
export default App;