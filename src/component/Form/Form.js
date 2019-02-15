import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: '',
            img: ''
        }
        this.baseState = this.state
        this.addInventory = this.addInventory.bind(this)
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    handleChangeImage = (val) => {
        this.setState({
            img: val
        })
    }

    handleChangePrice = (val) => {
        this.setState({
            price: val
        })
    }

    handleChangeProduct = (val) => {
        this.setState({
            name: val
        })
    }

    // addInventory(name, price, img) {
    //     this.setState({
    //         name,
    //         price,
    //         img
    //     })
    // }

    addInventory = (name, price, img) => {
        this.props.addInventory(name, price, img)
    }

    render() {
        const {name, price, img} = this.state
        return (
            <div>
                Image URL:
                <input
                type="text"
                onChange={e => this.handleChangeImage(e.target.value)}
                value={this.state.img} />
                Product Name:
                <input
                type="text"
                onChange={e => this.handleChangeProduct(e.target.value)}
                value={this.state.name} />
                Price:
                <input
                type="text"
                placeholder="0"
                onChange={e => this.handleChangePrice(e.target.value)}
                value={this.state.price} />
                <button onClick={this.resetForm}>Cancel</button>
                <button onClick={() => this.addInventory(name, price, img)}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form