import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SlideProducts from "../../components/slideProducts/SlideProducts"
import "./productDetails.css"
import LoadingProductDetails from './LoadingProductDetails';
import LoadingSlideProducts from '../../components/slideProducts/LoadingSlideProducts';
import ProductImages from './ProductImages';
import ProductInformation from './ProductInformation';

const ProductDetails = () => {

    const {id} = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [relatedProducts,setRelatedProducts] = useState([]);
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data)
                setLoading(false)
            }catch (error) {
                console.error(error);
            }
        }
        fetchProduct()
    },[id])

    useEffect(() => {
        if (!product) return;
    
        const fetchRelatedProducts = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/category/${product.category}`);
                const data = await res.json();
                setRelatedProducts(data.products || []); // Ensure it's an array
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingRelatedProducts(false);
            }
        };
    
        fetchRelatedProducts();
    }, [product?.category]);
    
    // console.log(relatedProducts);
    // console.log(loadingRelatedProducts);


    if(loading) return <LoadingProductDetails />
    if(!product) return <p> Product Not Found</p>

    return (
        <div>
            {loading ? (
                <LoadingProductDetails />
                ) : (
                    <div className="item-details">
                        <div className="container">
                            <ProductImages product={product} />
                            <ProductInformation product={product}/>
                        </div>
                    </div>
                )}
            {loadingRelatedProducts ? (
                <LoadingSlideProducts />
                ) : (
                <SlideProducts 
                    key={product.category} 
                    title={product.category.replace("-"," ")} 
                    data={relatedProducts} 
                />
            )}
        </div>
    )
}

export default ProductDetails