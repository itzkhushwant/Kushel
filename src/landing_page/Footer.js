import React from 'react';

function Footer() {
    return (
        <div className=' text-center ' style={{color: "white", backgroundColor: "#2984F8"}}>
        <h2 className='pt-5'>Say hello.</h2>
        <p>Tell some words about your idea.</p>
        <p>We beleive that every big deals start with simple "Hello"</p>

        <button type="button" class="btn btn-dark m-3 p-3" style={{border: "none", borderRadius: "50px", backgroundColor: "#00ffff", color: "black"}} > <i class="fa-solid fa-envelope"></i> Create brand new website</button>

        <button type="button" class="btn btn-dark m-3 p-3" style={{border: "none", borderRadius: "50px", backgroundColor: "#ffffff", color: "black"}} > <i class="fa-solid fa-envelope"></i> Improve my existing website</button>

        <p className='mt-2 p-5'>Not sure what is your case ? <a>Book a call and get a FREE consultation</a></p>


 
        
        <div className='mt-0 row' style={{backgroundColor: " #191919", color: "white", height: "5rem"}}>
            
                <div className='col-4'>
                <img src='../media/Kds logo white 1.png' alt='logo'  className=' p-3 ' style={{height:"5rem"}}></img>
                </div>
                <div className='col-4 text-center p-3 mt-2'> Privacy Policy | Terms of Services</div>
                <div className='col-4'></div>
            </div>
            </div>
        
    );
}

export default Footer;