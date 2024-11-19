import React from 'react';

function Navbar() {
    return (
        <div className='' style={{width: "100%"}}>
        <div className='row ' style={{height: "4rem"}}>
            <div className='col-1'></div>
            <div className='col-7 mb-2 mt-2 p-1.5'>
                <img className='p-2' src='../media/Kds logo 1.png' alt='logo' style={{height: "70%"}}></img>
            </div>
            <div className='col-1 mt-4 '></div>
            <div className='col-2 mt-4 '>
                <h5>CALL: +91 9045301702</h5>
            </div>
        </div>
    </div>
    );
}

export default Navbar;