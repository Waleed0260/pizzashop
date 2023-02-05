import React from 'react';


const singleproduct = ({product}) => {
    return(
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.desc}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}

singleproduct.getInitialProps = async ({query}) => {
    const { id } = query;
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    return { product: res.data };
}

export default singleproduct;