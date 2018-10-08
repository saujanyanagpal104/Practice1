import React from 'react';

import Products from './Products';
import Table from './Table';


class App extends React.Component {
    state={
        hover: false,
        products: [
            {
                name: "fruit1",
                image: "http://www.pngmart.com/files/1/Cherry-Fruit-Transparent-Background.png",
                alt: "fruit1",
                price: "$2.00",
                desc: "something1",
                condition: "FRESH",
                index: 1
            },
            {
                name: "fruit2",
                image: "https://rpelm.com/images250_/clipart-lake-basin-9.png",
                alt: "fruit2",
                price: "$5.00",
                desc: "something2",
                condition: "WASTE",
                index: 2
            },
            {
                name: "fruit3",
                image: "http://www.pngmart.com/files/1/Cherry-Fruit-Transparent-Background.png",
                alt: "fruit3",
                price: "$4.12",
                desc: "something3",
                condition: "FRESH",
                index: 3
            },
            {
                name: "fruit4",
                image: "https://rpelm.com/images250_/clipart-lake-basin-9.png",
                alt: "fruit4",
                price: "$7.00",
                desc: "something4",
                condition: "WASTE",
                index: 4
            },
        ],
        selectedItem: [],
        clicked: false
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
    itemClicked = () => {
        this.setState({
            clicked: true
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