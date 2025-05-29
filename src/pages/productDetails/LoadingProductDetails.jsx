import React from 'react'
import "./productDetails.css"
const LoadingProductDetails = () => {
    return (
        <div className='loading-item'>
            <div className="item-details">
                <div className="container">
                    <div className="images-item skeltion"></div>
                    <div className="details-item">
                        <h5 className="loading-text-details-item skeltion"></h5>
                        <h5 className="loading-text-details-item skeltion"></h5>
                        <h5 className="loading-text-details-item skeltion"></h5>
                        <h5 className="loading-text-details-item skeltion"></h5>
                        <h5 className="loading-text-details-item skeltion"></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingProductDetails