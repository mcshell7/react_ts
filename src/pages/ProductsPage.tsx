import React, {useEffect, useState} from 'react';
import Pagination from "../components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import Product from "../components/Product/Product";
import {IProducts} from "../models/IProducts";

const ProductsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProducts[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            apiService.products
                .getAll(+page)
                .then(value => {
                        setProducts(value.products)
                        const lastId = value.products[value.products.length - 1].id;
                        if (lastId >= (value.total)){
                            setFlag(true);
                        }else {
                            setFlag(false);
                        }
                        console.log();
                    }
                );
        }
    }, [query]);

    return (
        <div>
            <Product items={products}/>
            <Pagination flag={flag}/>
        </div>
    );
};

export default ProductsPage;