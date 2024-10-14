import React, {FC} from 'react';
import Product from "../Product/Product";

import {apiProductsObject} from '../../data';
import {IProductModel} from "../../models/IProductModel";


const Products: FC = () => {
    const products: IProductModel[] = apiProductsObject.products;

    return (
        <div className='grid'>

            {products.map((product) => (
                <Product item={product} key={product.id}/>
            ))}
        </div>
    );
};

export default Products;
