import { useState } from 'react'
import Header from "../src/components/header/Header"
import './App.css'
import MainHeader from './components/header/MainHeader';
import Hero from './components/hero/Hero';
import BestProducts from './components/bestProducts/BestProducts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' App '>
        <Header />
        <MainHeader/>
        <Hero/>
        <BestProducts/>

    </div>
    </>
  )
}

export default App
