import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import "./home.css"
import SlideProducts from "../../components/slideProducts/SlideProducts";
import LoadingSlideProducts from '../../components/slideProducts/LoadingSlideProducts';

const categories =[
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories"
]

const Home = () => {

    const [products,setProducts] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await response.json();
                        return {[category] : data.products}
                    })
                ) 
                const productsData = Object.assign({}, ...results);
                setProducts(productsData)
            }catch (error) {
                console.log("Error Fetching",error);
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    // console.log(products["smartphones"]);

    return (
        // <PageTransitionEvent>
            <div>
                <HeroSlider />
                {loading ? (
                    categories.map((category) => (
                        <LoadingSlideProducts key={category}/>
                    ))
                ) : (categories.map((category,index) => (
                    <SlideProducts key={index} data={products[category]} title={category.replace("-"," ")} />
                )))}
            </div>
        // </PageTransitionEvent>
    )
}

export default Home