import React from 'react';

function Portfolio() {
    return (
        <div className='  ' style={{color: "white"}}>
            <h3 className='text-center ' style={{color: "black"}}>Our Portfolio</h3>
            <div className='row ' style={{backgroundColor: "midnightblue"}}>
                <div className='col-6 mt-5 mb-5'>
                    <img className='' style={{height: "70%"}}  src='../media/Apple MacBook Air 13_ Silver.png'></img>
                </div>
                <div className='col-6 mt-5 mb-5 '>
                    <h2 className=''><b>DigitalMna</b></h2>
                    <p>Crypto apps are mobile or web applications designed to facilitate various activites related to cryptocurrencies. These appps allow users to buy, sell, trade, and manage their digital assets securely. Features often include real-time price tracking. </p>

                    <a href='' style={{textDecoration: "none", color: "white"}}> View Live Site <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

            <div className='row ' style={{backgroundColor: "#429E9D"}}>
            <div className='col-6  mt-5 mb-5'>
            <h2 className=''><b>Buildlink</b></h2>
                    <p>A dealing applicationis a software platform designed to facilitate trading and transactions i finanicial markets. It provides users wit tools for executing buy and sell orders, monitoring market conditions, analyzing financial data, and managing portfolios.</p>

                    <a href='' style={{textDecoration: "none", color: "white"}}> View Live Site <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-6 text-center mt-5 mb-5'>
                <img style={{height: "70%"}} src='../media/Apple MacBook Air 13_ Silver.png'></img>
            </div>
            </div>
            <div className='row'>
            <div className='container text-center' style={{backgroundColor: " #0A0F14"}}>
            <h1 className='m-5' style={{color: "white"}}>Our Clients</h1>

            <img className='mb-5' src='/media/Frame 1000010923.png'></img>
        </div>
            </div>
        </div>
    );
}

export default Portfolio;