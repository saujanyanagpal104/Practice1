import React from 'react';

import Product from './Product';

class Products extends React.Component {
    render() {
        return (
            <div className="products-container">
                <h2>Compare Products</h2>
                <div className="products">
                    {Object.keys(this.props.products).map(key => <Product key={key} index={key}  selectedItem={this.props.selectedItem} itemSelected={this.props.itemSelected} clicked={this.props.clicked} hover={this.props.hover} onHover={this.props.onHover} outHover={this.props.outHover} details={this.props.products[key]} addItem={this.props.addItem} itemClicked={this.props.itemClicked} />)}
                </div>
            </div>
        )
    }
}
export default Products;