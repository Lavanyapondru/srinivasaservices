import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



function Priceplan() {
    return ( 
        <div>
            <div className="container">
                <div className="pricingtext">
                    <h1 className='mt-5 mb-5 text-center'>Pricing</h1>
                    <div className="plan">
                         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="plans">
                <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mb-4">Basic Plan</h5>
                           <h1 className="display-5 lh-1">₹399<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="text-secondary mb-4">Best For Small<br/> Individuals</h4>
                            <p className='lh-1'>Express Service</p>
                            <p className='lh-1'>Customs Clearance</p>
                            <p className='lh-1'>Time-Critical Services</p>
                            <a href='https://wa.me/919652735720' target='_blank'> <button className="btn btn-warning fs-5 mt-3" type="submit">Book Your Slot</button> </a>
                           </div>
                           </div>
                         </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="plans">
                <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mb-4">Professional Plan</h5>
                           <h1 className="display-5 lh-1 ">₹699<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="text-secondary lh-1 mb-4">Best For Small<br/> Professionals</h4>
                            <p className='lh-1'>Express Service</p>
                            <p className='lh-1'>Customs Clearance</p>
                            <p className='lh-1'>Time-Critical Services</p>
                            <p className='lh-1'>Cloud Service</p>
                            <p className='lh-1'>Best Dashboards</p>
                            <a href='https://wa.me/919652735720' target='_blank'> <button className="btn btn-warning fs-5 mt-3" type="submit">Book Your Slot</button> </a>
                           </div>
                           </div>
                             </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="plans">
            <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mb-4">Business Plan</h5>
                           <h1 className="display-5 lh-1">₹599<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="lh-1 mb-4 text-secondary">Best For Large<br/> Individuals</h4>
                            <p className='lh-1'>Express Service</p>
                            <p className='lh-1'>Customs Clearance</p>
                            <p className='lh-1'>Time-Critical Services</p>
                            <a href='https://wa.me/919652735720' target='_blank'> <button className="btn btn-warning fs-5 mt-3" type="submit">Book Your Slot</button> </a>
                           </div>
                           </div>
                           </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className="plans">
                <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mb-4">Basic Plan</h5>
                           <h1 className="display-5 lh-1">₹399<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="text-secondary lh-1 mb-4">Best For Small<br/> Individuals</h4>
                            <p className='lh-1'>Express Service</p>
                            <p className='lh-1'>Customs Clearance</p>
                            <p className='lh-1'>Time-Critical Services</p>
                            <p className='lh-1'>Domestic Services</p>
                            <p className='lh-1'>International Services</p>        
                            <a href='https://wa.me/919652735720' target='_blank'> <button className="btn btn-warning fs-5 mt-3" type="submit">Book Your Slot</button> </a>
                           </div>
                           </div>
                         </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className="plans">
            <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mb-4">Business Plan</h5>
                           <h1 className="display-5 lh-1">₹399<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="lh-1 mb-4 text-secondary">Best For Large<br/> Individuals</h4>
                            <p className='lh-4'>Express Service</p>
                            <p className='lh-1'>Customs Clearance</p>
                            <p className='lh-1'>Time-Critical Services</p>
                            <a href='https://wa.me/919652735720' target='_blank'> <button className="btn btn-warning fs-5 mt-3" type="submit">Book Your Slot</button> </a>
                           </div>
                           </div>
                           </div>
                           </SwiperSlide>
        
      </Swiper>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Priceplan;