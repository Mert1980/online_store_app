import React from 'react';

const Product = ({ name, price, stocked, search }) => {
    const style ={};
    
    if (stocked === false) {
        style.backgroundColor = 'red';
    }

    if (search !== "" && name.toLowerCase().indexOf(search.toLowerCase()) === -1){
        return null
    }

    return (
        <tr style={style}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
};

export default Product;