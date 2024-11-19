import React from 'react';

function Consultation() {
    return ( 
        <div className='container row mt-5' style={{backgroundColor: "#053162", color: "white", borderRadius: "30px"}}>
            
                <div className='col-8 p-5'>
                    <h2>Not sure from where to start?</h2>
                    <p className='p-2'>Contact us today to schedule a consultation with our experts and learn how we can help you to reach your goal with best results. </p>

                    <button type="button" class="btn btn-dark m-3 p-3" style={{borderRadius: "50px", backgroundColor: "#00ffff", color: "black"}} >Get FREE consultation</button>

        <button type="button" class="btn btn-dark m-3 p-3" style={{borderRadius: "50px", backgroundColor: "#185396"}} >Book a call</button>
                </div>
                <div className='col-4'>
                    <img src='../media/Group 101.png' style={{height: "80%"}} className='p-3'></img>
                </div>
            
        </div>
     );
}

export default Consultation;