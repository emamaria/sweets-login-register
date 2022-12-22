import React from 'react'

const Home = () => {
 
  
  return (
    <div>
    <div className='home__image'>
     <img src="/assets/home/home.jpg" alt="coffe_and_cake_image"/>
    </div>
    <div className='home__text'>
    <h2>Have a great time eating sweets and having a drink!</h2>
    </div>
    <footer> 
    {/* <div className='wave' style={{height: "150px",overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M-3.15,97.20 C114.22,23.19 273.93,-64.64 505.30,98.19 L500.00,150.00 L-8.80,167.26 Z" style={{stroke: "none", fill: "#6FEDD6"}}></path></svg></div> */}
     <div className='square'>
       <div className="address__container">
        <h2>Sweets and Drinks</h2>
        <p>Street I love sweets nº8 </p>
        <p>28013 Madrid</p>
        <p>Tel: 91 000 11 00</p>
        </div>
     </div>
    </footer>
    </div>
  )
}

export default Home