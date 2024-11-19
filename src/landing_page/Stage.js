import React from 'react';

function Stage() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'><h2><b>This is How We Create Solutions</b> People become addicted to</h2>
                
                <p>We are an end-to-end e-Commerce agency offering services falling under Digital Media, whether you need a content based intriductory website or a darabase driven eCommerce website or any complex business web solution to digitize your business processes and maximizethe productivity of your team.</p>
                </div>
                <div className='col-3'></div>
                
            </div>
            <div className='row mt-5 mb-5' style={{border: "1px solid blue", borderLeft: "1px solid white"}}>
            <div className='col-4'>
                1.
                <br/>
                <h5>Strategy</h5>
                <br/>
                <p className='text-muted fs-8'>We dive into your business requirements and develop detailed development plan with key deliverables, budget, and timeline</p>
            </div>
            <div className='col-4'>
            2.
            <br/>
                <h5>Design</h5>
                <br/>
                <p className='text-muted fs-8'>Initially, you will receive a prototypes for three main pages: product page, category page, and homepage, after testing and optimizing their UI/UX, we get your approval and move to design your actual store. </p>
            </div>
            <div className='col-4'>
            3.
            <br/>
                <h5>Development</h5>
                <br/>
                <p className='text-muted fs-8'>You can always choose a pre-built theme for your store. However, if you want to stand out, we will  create a custom design that meets your customer's expectations and business operation</p>
            </div>
            </div>

            <div className='row mt-5'>

            <div className='col-4'>
            4.
            <br/>
                <h5>Consultiing & IT staff</h5>
                <br/>
                <p className='text-muted fs-8'> We construct your ecommerce architecture from the ground up, customize all website features, and import customers and products into your store. The development phase is deleivered in sprints, and you'll have a dedicated project manager reporting on the milesstones and details.</p>
            </div>

            <div className='col-4'>
            5.
            <br/>
            
                <h5>Support</h5>
                <br/>
                <p className='text-muted fs-8'>We construct your ecommerce architecture from the ground up, customize all website features, and import customers and products into your store. The development phase is deleivered in sprints, and you'll have a dedicated project manager reporting on the milesstones and details.</p>
            </div>
            </div>

        </div>
     );
}

export default Stage;