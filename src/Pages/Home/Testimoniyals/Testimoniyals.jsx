import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimoniyals = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    })
    return (
        <section className="my-20">
            <SectionTittle
            subHeading="What Our Clients say"
            heaDing="testimonials"
            ></SectionTittle>

         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review => <SwiperSlide
        key={review._id} 
        >
   <div className="mx-16 my-24 flex flex-col items-center">
   <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

    <p className="my-10">{review.details}</p>
    <h3 className="text-2xl text-orange-400">{review.name}</h3>
   </div>
   <button className="items-center btn btn-outline border-0 border-b-4 mt-4">Click Now</button>
        </SwiperSlide>)
       }
      </Swiper>
            
        </section>
    );
};

export default Testimoniyals;