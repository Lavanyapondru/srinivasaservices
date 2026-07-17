function Contactus() {
    return ( 
        <div>
            <div className="container">
                <div className="contact">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243615.88519913304!2d78.44003839999999!3d17.4358528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1783746765435!5m2!1sen!2sin" width="550" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className="map"></iframe>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <h2 className="mb-4">Contact With Us</h2>
                            <p className="fs-5 lh-2 d-flex"><i class="bi bi-geo-alt-fill text-warning me-3"></i>abc street,Kukatpally,<br/> Hyderabad, 500001</p>
                            <p className="fs-5 lh-2 d-flex"><i class="bi bi-telephone-fill text-warning me-3"></i>Monday - Friday: 10 am - 10pm <br/>Sunday: 11 am - 9pm <br/></p>
                           <p className="para fs-5 lh-2 d-flex"><i class="bi bi-arrow-return-right text-warning me-3 fw-bold"></i> <a href="https://wa.me/919652735720" target='_blank' className="text-decoration-none text-dark">12 3456 7890</a> </p>
                            <p className="para fs-5 lh-2 d-flex"><i class="bi bi-envelope text-warning me-2"></i> <a href="mailto:srinivascourierservice@gmail.com" className="text-decoration-none text-dark">srinivasacourierservices@gmail.com</a> </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5 mb-5">
                        <img src="/callback.png" className="w-50"/>
                        <h6 class="text-danger fw-bold mt-4">
                    REQUEST A CALLBACK
                </h6>

                <h1 class="">
                    We will contact in <br/>
                    the shortest time.
                </h1>

                <p class="text-secondary">
                    Monday to Friday, 9am-5pm.
                </p>
                    </div>



                    <div className="col-lg-6 mt-5 mb-5">
                        <form>

                    <input type="text"
                           class="form-control form-input mb-3"
                           placeholder="Name"/>

                    <input type="email"
                           class="form-control form-input mb-3"
                           placeholder="Email"/>

                    <textarea
                        class="form-control form-input mb-4"
                        rows="6"
                        placeholder="Message"></textarea>

                    <button class="btn btn-outline-danger border-secondary py-3">
                        Send Message
                        <i class="bi bi-send-fill ms-2"></i>
                    </button>

                </form> 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Contactus;