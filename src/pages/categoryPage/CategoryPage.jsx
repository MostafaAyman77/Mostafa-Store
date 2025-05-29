import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product';
import "./CategoryPage.css"
import LoadingSlideProducts from '../../components/slideProducts/LoadingSlideProducts';

const CategoryPage = () => {

    const {category} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setCategoryProducts(data.products)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[category])

    // console.log(categoryProducts);
    

    return (
        <div>
            <div className="category-page">
                

                {loading ? <LoadingSlideProducts key={category} /> :
                    <div className="container">
                    <div className="top-slide">
                        <h2>{category} : {categoryProducts.length}</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam.</p>
                    </div>
                        <div className="products">
                            {categoryProducts.map((product, index) => (
                                <Product key={index} item={product} />
                            ))}
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default CategoryPage