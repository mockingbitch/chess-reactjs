import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="main-content">
            <Link to='/game-caro-made-by-phong-tran'><button className='btn btn-primary'>Caro Start</button></Link>
            <Link to='/game-chess-made-by-phong-tran'><button className='btn btn-primary'>Chess Start</button></Link>
        </div> 
    </>
  )
}

export default Home