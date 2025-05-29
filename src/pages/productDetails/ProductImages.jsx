import React from "react";
import "./productDetails.css";

const ProductImages = ({product}) => {

    return (
        <div>
            <div className="images-item">
                <div className="big-image">
                    <img id="" src={product.images[0]} alt={product.title} />
                </div>
                <div className="small-images">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={product.title}
                            onClick={() => (document.getElementById("big-image").src = image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImages;
