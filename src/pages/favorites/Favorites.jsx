import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import Product from '../../components/slideProducts/Product';


const Favorites = () => {

const {favorites} = useContext(CartContext);

    return (
        <div>
            <div className="category-products favorites-page">
                <div className="container">
                    <div className="top-slide">
                        <h2>Your Favorites</h2>
                    </div>
                    {favorites.length === 0 ? (
                        <p>No Favorite Products yet.</p>
                    ) : (
                        <div className="products">
                            {favorites.map(item => (
                                <Product item={item} key={item.id} />
                            ) )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Favorites