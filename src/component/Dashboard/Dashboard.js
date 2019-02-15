import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
        
    render(props) {
        const mappedProducts = this.props.products.map(product => {
            return (
                <Product
                key={product.id}
                product={product}
                 />
            )
        })
        return (
            <div>
                Dashboard
                < Product  />
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard