import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';
import { Suspense, lazy } from 'react';
import Shimmer from './Components/Shimmer';

function App() {
  const Instamart = lazy(() => import("./Components/Instamart"));

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/instamart' element={<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>}/>
          
        </Routes>
      <Footer/>
    </>
  )
}

export default App
