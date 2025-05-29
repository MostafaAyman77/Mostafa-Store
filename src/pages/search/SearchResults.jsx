import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Product from '../../components/slideProducts/Product';
import LoadingSlideProducts from '../../components/slideProducts/LoadingSlideProducts';
const SearchResults = () => {

    const [results, setResults] = useState([]);
    const query = new URLSearchParams(useLocation().search).get("query");

    const [loading,setLoading] = useState(true);
    
    // console.log(results);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                const data = await res.json();
                setResults(data.products || []);
            } catch (error) {
                console.log("Error fetching products", error);
            } finally {
                setLoading(false);
            }
        }
        if(query){
            fetchProducts();
        }
    }, [query]);
    
    return (
        <div>
            <div className="category-page">
                {loading ? <LoadingSlideProducts key={query} /> :
                    results.length > 0 ? (
                        <div className="container">
                            <div className="top-slide">
                                <h2>Results for : {query}</h2>
                            </div>
                            <div className="products">
                                {results.map((product, index) => (
                                    <Product key={index} item={product} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="container">
                            <h2>No Products found</h2>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default SearchResults