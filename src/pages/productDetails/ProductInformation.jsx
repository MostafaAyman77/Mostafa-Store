import React, { useContext } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { IoMdStarHalf } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaShare, FaRegHeart } from "react-icons/fa";
import "./productDetails.css"
import { CartContext } from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

function ProductInformation({product}) {

    const {cartItems, addToCart, addToFavorite, favorites, removeFromFavorites} = useContext(CartContext);
    // UseNavigate for navigation
    const navigate = useNavigate()

    const isInCart = cartItems.some(i => i.id === product.id);

    const handleAddToCart = () => {
        addToCart(product)

        // Toast Library
        toast.success(
            <div className="toast-wrapper">
                <img className='toast-image' src={product.images[0]} alt="" />
                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to Cart
                    <div>
                        <button className='btn' onClick={() => navigate("/cart")}>View Cart</button>  
                    </div>
                </div>
            </div>
            ,{duration: 4000}
        )
    }

    // Add To Favorites

    const isInFavorites = favorites.some(i => i.id === product.id);

    const handleAddToFavorite = () => {
        if(isInFavorites) {
            removeFromFavorites(product.id)
            toast.error(`${product.title} removed from favorites`)
        }else {
            addToFavorite(product)
            toast.success(`${product.title} added to favorites`)
        }
    }

    return (
        <div>
            <div className="details-item">
                <h1 className="name">{product.title}</h1>
                <div className="stars">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <IoMdStarHalf />
                </div>
                <p className='price'>${product.price}</p>
                <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                <h5>Brand: <span>{product.brand}</span></h5>
                <p className="desc">{product.description}</p>
                <h5 className='stock'> <span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
                <button 
                    className={`btn ${isInCart ? "in-cart" : ""}`} 
                    onClick={handleAddToCart}
                >
                    {isInCart ? "Item in Cart" : "Add to card"}<TiShoppingCart />
                </button>
                <div className="icons">
                    <span className={`${isInFavorites ? "in-favorite" : ""}`} onClick={handleAddToFavorite} ><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </div>
        </div>
    )
}

export default ProductInformation