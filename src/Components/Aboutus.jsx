function Aboutus() {
    return ( 
        <div>
            <div className="bgimg">
              <div className="container">
                <div className="about">
                    <div className="row">
                        <div className="col-lg-6 abtext mt-3">
                        <h1 className="display-4 lh-1 mb-4 weight">A trusted provider of <span className="weight1">courier services</span>.</h1>
                        <p className="fs-4 mb-4">We deliver your products safely to<br/>your home in a reasonable time.</p>
                        <button className="btn btn-warning fs-5 me-3 weight2">Get Started <i class="bi bi-arrow-right"></i></button> 
                        </div>
                        <div className="col-lg-6">
                            <div className="aboutimg">
                                <img src="/about.png" className="w-100"/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
            



            <div className="container">
                <div className="aboutmore text-center">
                    <h1 className="mt-3 mb-3">About Us</h1>
                    <p className="lead">At <span className="weight1">Srinivasa Courier Services, </span> we pride ourselves on being a trusted provider of reliable delivery solutions. With a commitment to safety, speed, and care, we ensure your products reach your doorstep securely and on time.</p>
                    <div className="about-section">
                        <div className="row mt-5 mb-5">
                            <div className="col-lg-4">
                                <div className="more">
                                    <h2 className="section-title mb-3">Who We Are</h2>
                                     <p className="section-text lead"> Srinivasa Courier Services is a trusted name in logistics, delivering consignments with safety, speed, and professionalism.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="more">
                                 <h2 className="section-title mb-3">Our Technology</h2>
                                 <p className="section-text lead"> Leveraging advanced tracking systems and digital solutions, we provide customers with real-time visibility and confidence.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                               <div className="more">
                                 <h2 className="section-title mb-3">Our Commitment</h2>
                                 <p className="section-text lead"> We are dedicated to excellence in service, building long-term partnerships through integrity and customer satisfaction.</p>
                               </div>
                            </div>
                            
                        </div>
                         <a href='https://wa.me/919652735720' target='_blank'><button className="btn btn-warning fs-5 mt-5  button" type="button">Explore More</button> </a>

                        </div>
                        </div>
            </div>












            
        </div>
     );
}

export default Aboutus;