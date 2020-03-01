import React from 'react';
import Product from "./Product";

const ProductCategory = ({category, products, filter, search}) => {
    const $categoryRow = [
        <tr>{category}</tr>
    ];
    const $productItems = products.map(product => <Product {...product} filter={filter} search={search}/>);

        
    const $products = [...$categoryRow, ...$productItems];
    
    return (
        <>
            {$products}
        </>
    )
};

export default ProductCategory;