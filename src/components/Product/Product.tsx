import React, {FC} from 'react';
import {IProductModel} from "../../models/IProductModel";
type TypeProps  = { item: IProductModel }
const Product: FC<TypeProps> = ({item}) => {
    console.log(item)
    return (
        <div>
            <p>{item.id}</p>
            <h1>{item.title}</h1>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <p><strong>Discount:</strong> {item.discountPercentage}%</p>
            <p><strong>Rating:</strong> {item.rating}/5</p>
            <p><strong>Stock:</strong> {item.stock} available</p>
            <p><strong>Brand:</strong> {item.brand || "N/A"}</p>
            <p><strong>SKU:</strong> {item.sku}</p>
            <p><strong>Weight:</strong> {item.weight} kg</p>
            {item.dimensions && (
                <div>
                    <h3>Dimensions</h3>
                    <p>Width: {item.dimensions.width} cm</p>
                    <p>Height: {item.dimensions.height} cm</p>
                    <p>Depth: {item.dimensions.depth} cm</p>
                </div>
            )}
            <p><strong>Warranty:</strong> {item.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {item.shippingInformation}</p>
            <p><strong>Availability:</strong> {item.availabilityStatus}</p>
            <p><strong>Return Policy:</strong> {item.returnPolicy}</p>
            <p><strong>Minimum Order Quantity:</strong> {item.minimumOrderQuantity}</p>
            {item.reviews && item.reviews.length > 0 && (
                <div>
                    <h3>Reviews</h3>
                    <ul>
                        {item.reviews.map((review, index) => (
                            <li key={index}>
                                <strong>{review.reviewerName}</strong>: {review.comment} (Rating: {review.rating})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <h3>Images</h3>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};
export default Product;