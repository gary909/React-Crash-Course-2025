import React from 'react'

function Products() {
    const products = ["Learning React", "Pro React", "Beginning React"]
    const ListProducts = products.map((product) => 
    <li key={product.toString()}>{product}</li>
)
    return (
        <div>
            <ul>
                {ListProducts}
            </ul>
        </div>
    )
}

export default Products