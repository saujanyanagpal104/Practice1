import React from 'react';

class Product extends React.Component {
    nameRef = React.createRef()
    priceRef = React.createRef()
    descRef = React.createRef()
    handleClick = (e) => {
        const value = {
            name: this.nameRef.current.innerText,
            price: this.priceRef.current.innerText,
            desc: this.descRef.current.innerText,
            condition: this.props.details.condition.cond,
            color: this.props.details.condition.color,
        }
        this.props.itemClicked(value)
    }
    mouseOver = (e) => {
        this.props.onHover()
    }
    mouseLeave = () => {
        this.props.outHover()
    }
    renderButton = () => {
        if(this.props.hover) {
            return (
                <div className="overlay">
                    <button onClick={this.handleClick} id="button">Compare</button>
                </div>
            )
        }
    }
    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        const price = this.props.details.price;
        const desc = this.props.details.desc;
        const { index } = this.props;
        return (
            <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave} data-tag={index} className="product">
                {this.renderButton()}
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="text">
                    <div className="inner-text">
                        <h3 ref={this.nameRef} id="inner-head">{name}</h3>
                        <strong ref={this.priceRef} id="price">{price}</strong>
                    </div>
                    <h3 ref={this.descRef} id="desc">{desc}</h3>
                </div>
            </div>
        )
    }
}
export default Product;