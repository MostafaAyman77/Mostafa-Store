import { Route, Routes } from "react-router-dom"
import BottomHeader from "./components/header/BottomHeader"
import TopHeader from "./components/header/TopHeader"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Cart from "./pages/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./components/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./pages/categoryPage/CategoryPage"
import SearchResults from "./pages/search/SearchResults"
import Favorites from "./pages/favorites/favorites"

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: "#e9e9e9",
          borderRadius: "5px",
          padding: "14px"
        }
      }}/>

  <ScrollToTop />
      {/* <AnimatePresence mode="wait"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/search" element={<SearchResults />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
        {/* </AnimatePresence> */}
    </>
  )
}

export default App
