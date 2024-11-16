import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.services";
import {IProduct, IProductDimensions, IProductMeta, IProductReviews} from "../models/IProduct";

const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    
    useEffect(() => {
        loadAuthProducts().then(products => {
            if (products){
                setProducts(value => products);
            }
        }).catch(reason => {
            refresh().then()
        });

    }, []) ;

    return (
        <div>
            {
                products.map(item => (
                    <div>
                        <div key={item.id}>
                            <b>{item.id}</b>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                            <p>{item.rating}</p>
                        </div>
                        <br/>
                        <hr/>
                    </div>


                ))
            }

        </div>
    );
};

export default AuthResourcesPage;