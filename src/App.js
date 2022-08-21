import './App.css';
import React, { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/BacktoTop/ScrollTop';
import scrollreveal from 'scrollreveal';
import About from './pages/About/About';
import Gallery from './components/Gallery/Gallery';
import Rent from './pages/Rent/Rent';
import FindScooterForm from './components/FindScooterForm/FindScooterForm';



function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal({
  //       origin: 'bottom',
  //       distance: '80px',
  //       duration: 1000,
  //       reset: false,
  //     });
  //     sr.reveal(
  //       `
  //         navbar,
  //         .home
  //       `
  //     )
  //   }
  // })

  return (
    <>
     <div className="App">
      
      {loading ? (
        <SyncLoader size={10} color={'#15133C'} loading={loading} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100vh', width: '100%', alignItems: 'center'}}  />
      ) : (
        <>
        <ScrollTop />
        <Navbar />
        
        <About />
        <FindScooterForm />
        <Gallery />
        <Rent />


        <Footer />
        </>

      )}
   
      </div>
      </>
  );
}

export default App;
