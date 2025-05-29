import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css"
const Cart = () => {

    const {cartItems, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    // console.log(cartItems);

    return (
        <div className='checkout'>
            <div className="order-summary">
                <h1>Order Summary</h1>
                <div className="items">
                {cartItems.length === 0 ? (
                    <p>Your Cart is Empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="item-cart">
                            <div className="image-item">
                                <div className="image">
                                    <img src={item.images[0]} alt={item.title} />
                                </div>
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <p className="price-item">${item.price}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <button className='delete' onClick={() => removeFromCart(item.id)}><FaTrashAlt /></button>
                        </div>
                    ))
                )}
                </div>
                <div className="bottom-summary">
                    <div className="shop-table">
                        <p>Total:</p>
                        <span className="total-checkout">${total.toFixed(2)}</span>
                    </div>
                    <div className="btn-checkout">
                        <button className='' type='submit'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart