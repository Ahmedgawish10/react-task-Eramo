import { useState ,useEffect} from 'react'
import Header from "../src/components/header/Header"
import './App.css'
import MainHeader from './components/header/MainHeader';
import Hero from './components/hero/Hero';
import BestProducts from './components/bestProducts/BestProducts';
import Loading from './components/loding/Loading';

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);
  return (
<div className="App">
      {loading ? (
        <div className="loading-screen">
       
          <Loading/>
        </div>
      ) : (
        <>
           <Header />
        <MainHeader/>
        <Hero/>
        <BestProducts/>
        </>
      )}
    </div>




    
    
  )
}

export default App
