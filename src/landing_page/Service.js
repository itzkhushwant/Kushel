import React from 'react';

function Service() {
    return (
        <div className='container mt-5 mb-5 text-center'>
            <div className='row'>
                <div className='col-2 '></div>
                <div className='col-8'>
                <h2><b>Service We Provide</b></h2>
                <h6 className='p-3'>We cultivate a collaborative bond with our clients, akin to friendship, to ensure the delivery of optimal and tailored solutions.</h6>
            </div>
            <div className='row ' style={{backgroundColor: " #F8DB46", borderRadius: "30px"}}>
                <div className=''></div>
                <div className='col-2 m-4 p-2'>
                <div className='card ' style={{width:"14rem"}}>
                    <div className='card-body'>
                    <i class="fa-solid fa-layer-group"></i>
                        <h5 className='card-title'> UI/UX</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div></div>

                <div className='col-2 m-4  p-2'>
                <div className='card ' style={{width:"14rem"}}>
                    <div className='card-body'>
                    <i class="fa-solid fa-window-maximize"></i>
                        <h5 className='card-title'>Website Design</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div></div>

                <div className='col-2 m-4  p-2'>
                <div className='card ' style={{width:"14rem"}}>
                    <div className='card-body'>
                    <i class="fa-solid fa-laptop-code"></i>
                        <h5 className='card-title'>Web Development</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div></div>

                <div className='col-2 m-4  p-2'>
                <div className='card ' style={{width:"14rem"}}>
                    <div className='card-body'>
                    <i class="fa-solid fa-computer"></i>
                        <h5 className='card-title'>Responsive Design</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div>
                </div>

                

            </div>

            <button type="button" class="btn btn-dark p-3 mt-5" style={{borderRadius: "30px"}} >Get Started</button>
        </div>
    );
}

export default Service;