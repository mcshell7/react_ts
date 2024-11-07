import React, {FC} from 'react';
import {IProducts} from "../../models/IProducts";
import styles from "./product.module.scss";

type ProductProps = {
    items: IProducts[];
}

const Product: FC<ProductProps> = ({items}) => {
    return (
        <div className={styles.items}>
            {
                items.map(item => (
                    <div className={styles.item}>
                        {item.id}.-
                        {item.title}
                        <img className={styles.img} src={item.images[1]} alt="Logo"/>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;