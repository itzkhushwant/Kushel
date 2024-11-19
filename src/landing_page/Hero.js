import React from 'react';

function Hero() {
    return (  
        
            <div className='row mb-5 p-5' style={{backgroundColor: "#0096FF", color:"white"}}>
                <div className='col-'></div>
                <div className='col-5 '>
                    <h3 className='m-3'>Website Design services that Maximize Traffic, Engagement, and Conversion</h3>
                    <p className='m-3 '>Improve the communication between your brand and your customers with professionally crafted design and the best practices in web development.</p>
                    <div className='row'>
                    <div className='col-4 fs-12 p-3'>
                        <p ><i class="fa-regular fa-circle-check "></i>100% Mobile Friendly</p>
                        <p><i class="fa-regular fa-circle-check"></i>Conversion Friendly</p>
                    </div>
                    <div className='col-4 p-3'>
                    <p ><i class="fa-regular fa-circle-check "></i>100% Mobile Friendly</p>
                    <p><i class="fa-regular fa-circle-check"></i>Conversion Friendly</p>

                    </div>
                    
                   </div>
                   
                </div>
               
                

            

            <div className='col-4 p-3' style={{position: "absolute", top: "80px", left: "800px"}}> 
                    <form className='form-control'>
                        <h5 className='text-center mt-5'>Let's Build Your <b>Website!</b></h5>
                        <label for="name"> Name</label><br/>
                        <input type='text' className='name'></input>
                        <br/>
                        <br/>
                        <label for="name"> Email</label><br/>
                        <input type='text' className='name'></input>
                        <br/>
                        <br/>
                        <label for="name"> Phone</label><br/>
                        <input type='text' className='name'></input>
                        <br/>
                        <br/>
                        <label for="name"> What's your project about</label><br/>
                        <input type='text' className='name'></input>
                        <br/>
                        <br/>
                        <button type="button" class="btn btn-primary mt-3" style={{borderRadius: "20px"}} >Submit</button><br/><br/>


                    </form>
                </div>
        </div>
    );
}

export default Hero;