import React, { useContext } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { IoMdStarHalf } from "react-icons/io";
import { FaCartArrowDown, FaShare, FaRegHeart } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';

const Product = ({item}) => {
    // console.log(item);
    const {cartItems, addToCart, addToFavorite, favorites, removeFromFavorites} = useContext(CartContext);
    // console.log(cartItems);
    const isInCart = cartItems.some(i => i.id === item.id);
    // UseNavigate for navigation
    const navigate = useNavigate()
    
    const handleAddToCart = () => {
        addToCart(item)

        // Toast Library
        toast.success(
            <div className="toast-wrapper">
                <img className='toast-image' src={item.images[0]} alt="" />
                <div className="toast-content">
                    <strong>{item.title}</strong>
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

    const isInFavorites = favorites.some(i => i.id === item.id);

    const handleAddToFavorite = () => {
        if(isInFavorites) {
            removeFromFavorites(item.id)
            toast.error(`${item.title} removed from favorites`)
        }else {
            addToFavorite(item)
            toast.success(`${item.title} added to favorites`)
        }
    }
    
    return (
        <div className={`product ${isInCart ? "in-cart" : ""}`}>
            <Link  to={`/products/${item.id}`}>
                <span className='cart-status'><FaCheck /> in cart</span>
                <div className="img-product">
                    <img src={item.images[0]} alt="" />
                </div>
                <p className="product-name">{item.title}</p>
                <div className="stars">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <IoMdStarHalf />
                </div>
                <p className='price'><span>${item.price}</span></p>
            </Link>
                <div className="icons">
                    <span className='btn-add-to-cart' onClick={handleAddToCart} ><FaCartArrowDown /></span>
                    <span className={`${isInFavorites ? "in-favorite" : ""}`} onClick={handleAddToFavorite} ><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
        </div>
    )
}

export default Product